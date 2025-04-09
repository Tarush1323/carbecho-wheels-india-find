
import { useState } from "react";
import { useWishlist } from "../hooks/useWishlist";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatter";
import { Heart, ArrowLeft, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      <Navbar />
      <div className="carbecho-container py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Heart size={24} className="text-carbecho-orange" />
            <h1 className="text-2xl font-bold">Your Wishlist</h1>
          </div>
          
          <Link 
            to="/"
            className="flex items-center gap-1 text-gray-400 hover:text-carbecho-orange transition-colors"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>
        
        {wishlist.length === 0 ? (
          <div className="carbecho-card p-10 text-center">
            <div className="flex justify-center mb-4">
              <Heart size={48} className="text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-400 mb-6">
              Start adding cars to your wishlist by clicking the heart icon
            </p>
            <Link to="/" className="carbecho-button inline-block">
              Browse Cars
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-end">
              <button
                onClick={() => setShowConfirmation(true)}
                className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
              >
                <Trash2 size={16} />
                Clear Wishlist
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((car) => (
                <div key={car.id} className="carbecho-card h-full flex flex-col">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={`${car.brand} ${car.model}`} 
                      className="w-full h-48 object-cover"
                    />
                    <button 
                      className="absolute top-2 right-2 p-2 rounded-full bg-carbecho-orange text-white"
                      onClick={() => removeFromWishlist(car.id)}
                      aria-label="Remove from wishlist"
                    >
                      <Heart size={18} fill="white" />
                    </button>
                  </div>
                  
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold mb-1">{car.brand} {car.model}</h3>
                    <p className="text-carbecho-orange font-bold mb-2">{formatPrice(car.price)}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                      <div className="flex flex-col">
                        <span className="text-gray-400">Fuel Type</span>
                        <span>{car.fuelType}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-400">Seating</span>
                        <span>{car.seatingCapacity} Seats</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-400">Year</span>
                        <span>{car.year}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-400">Mileage</span>
                        <span>{car.mileage} kmpl</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Link 
                        to={`/car/${car.id}`}
                        className="carbecho-button w-full flex items-center justify-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="carbecho-card p-6 max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Clear Wishlist</h2>
              <p className="mb-6">
                Are you sure you want to remove all cars from your wishlist? This action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="carbecho-button-outline flex-1"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    clearWishlist();
                    setShowConfirmation(false);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 flex-1 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
