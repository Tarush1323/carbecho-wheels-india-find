
import { useState, useEffect } from "react";
import CarCard from "./CarCard";
import { CarType } from "../services/carService";
import { useWishlist } from "../hooks/useWishlist";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarGridProps {
  cars: CarType[];
  loading: boolean;
}

const CarGrid = ({ cars, loading }: CarGridProps) => {
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  const handleToggleWishlist = (car: CarType) => {
    if (isInWishlist(car.id)) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
  };

  // Get current cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 when cars array changes (e.g., due to filtering)
  useEffect(() => {
    setCurrentPage(1);
  }, [cars.length]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="carbecho-card h-64 animate-pulse">
            <div className="bg-gray-700 h-40 w-full"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="carbecho-card p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">No cars found</h3>
        <p className="text-gray-400">Try adjusting your search filters</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCars.map((car) => (
          <CarCard 
            key={car.id} 
            car={car} 
            isInWishlist={isInWishlist(car.id)}
            onToggleWishlist={handleToggleWishlist}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="carbecho-button-outline p-2 disabled:opacity-50"
            >
              <ArrowLeft size={16} />
            </button>
            
            <div className="flex items-center">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show only specific page numbers to avoid clutter
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-8 h-8 flex items-center justify-center rounded-md mx-1 ${
                        currentPage === pageNumber
                          ? "bg-carbecho-orange text-white"
                          : "bg-transparent text-white hover:bg-carbecho-dark-border"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  (pageNumber === currentPage - 2 && currentPage > 3) ||
                  (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                ) {
                  return <span key={pageNumber} className="mx-1">...</span>;
                }
                return null;
              })}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="carbecho-button-outline p-2 disabled:opacity-50"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarGrid;
