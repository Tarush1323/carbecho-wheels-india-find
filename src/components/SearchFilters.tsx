
import { useState, useEffect } from "react";
import { getCarBrands } from "../services/carService";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  brand: string;
  priceRange: [number, number];
  fuelType: string;
  seatingCapacity: number | null;
  sortBy: "price-low-high" | "price-high-low" | "";
}

const defaultFilters: SearchFilters = {
  brand: "",
  priceRange: [0, 10000000],
  fuelType: "",
  seatingCapacity: null,
  sortBy: "",
};

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);
  const [brands, setBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchBrands = async () => {
      const brands = await getCarBrands();
      setBrands(brands);
    };

    fetchBrands();
  }, []);

  const handleFilterChange = (name: keyof SearchFilters, value: any) => {
    if (name === "priceRange") {
      const [min, max] = value;
      setMinPrice(min);
      setMaxPrice(max);
    }

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    setMinPrice(0);
    setMaxPrice(10000000);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="carbecho-card mb-6 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Filter size={20} className="text-carbecho-orange" />
          Filters
        </h2>
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden"
        >
          {isFilterOpen ? <ChevronUp className="text-carbecho-orange" /> : <ChevronDown className="text-carbecho-orange" />}
        </button>
      </div>
      
      <div className={`mt-4 ${isFilterOpen || window.innerWidth >= 768 ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <select
              className="carbecho-input w-full"
              value={filters.brand}
              onChange={(e) => handleFilterChange("brand", e.target.value)}
            >
              <option value="">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Min Price (₹)</label>
            <input
              type="number"
              min="0"
              max={maxPrice}
              className="carbecho-input w-full"
              value={minPrice}
              onChange={(e) => {
                const value = Number(e.target.value);
                setMinPrice(value);
                handleFilterChange("priceRange", [value, maxPrice]);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Max Price (₹)</label>
            <input
              type="number"
              min={minPrice}
              className="carbecho-input w-full"
              value={maxPrice}
              onChange={(e) => {
                const value = Number(e.target.value);
                setMaxPrice(value);
                handleFilterChange("priceRange", [minPrice, value]);
              }}
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type</label>
            <select
              className="carbecho-input w-full"
              value={filters.fuelType}
              onChange={(e) => handleFilterChange("fuelType", e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Seating Capacity */}
          <div>
            <label className="block text-sm font-medium mb-1">Seating Capacity</label>
            <select
              className="carbecho-input w-full"
              value={filters.seatingCapacity || ""}
              onChange={(e) => 
                handleFilterChange(
                  "seatingCapacity", 
                  e.target.value ? Number(e.target.value) : null
                )
              }
            >
              <option value="">Any</option>
              <option value="2">2 Seater</option>
              <option value="4">4 Seater</option>
              <option value="5">5 Seater</option>
              <option value="6">6 Seater</option>
              <option value="7">7+ Seater</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 items-start md:items-center justify-between">
          {/* Sort options */}
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium mb-1">Sort By</label>
            <select
              className="carbecho-input w-full"
              value={filters.sortBy}
              onChange={(e) => 
                handleFilterChange(
                  "sortBy", 
                  e.target.value as SearchFilters["sortBy"]
                )
              }
            >
              <option value="">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          
          {/* Reset button */}
          <button 
            className="carbecho-button-outline"
            onClick={handleReset}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
