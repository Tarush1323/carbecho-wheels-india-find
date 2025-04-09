
import { useState, useEffect } from "react";
import { CarType, filterCars } from "../services/carService";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchFilters, { SearchFilters as SearchFiltersType } from "../components/SearchFilters";
import CarGrid from "../components/CarGrid";
import Footer from "../components/Footer";

const Index = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<SearchFiltersType>({
    brand: "",
    priceRange: [0, 10000000],
    fuelType: "",
    seatingCapacity: null,
    sortBy: "",
  });

  // Fetch cars on initial load and when search/filters change
  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const filteredCars = await filterCars(searchQuery, {
          brand: filters.brand,
          priceRange: filters.priceRange,
          fuelType: filters.fuelType,
          seatingCapacity: filters.seatingCapacity,
          sortBy: filters.sortBy,
        });
        setCars(filteredCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: SearchFiltersType) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero onSearch={handleSearch} />

      <main className="flex-grow py-12">
        <div className="carbecho-container">
          <SearchFilters onFilterChange={handleFilterChange} />
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {loading ? "Loading cars..." : `${cars.length} cars found`}
            </h2>
          </div>
          <CarGrid cars={cars} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
