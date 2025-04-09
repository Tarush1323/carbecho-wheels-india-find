
import { useState } from "react";
import { Heart } from "lucide-react";
import { formatPrice } from "../utils/formatter";
import { CarType } from "../services/carService";
import { Link } from "react-router-dom";

interface CarCardProps {
  car: CarType;
  isInWishlist: boolean;
  onToggleWishlist: (car: CarType) => void;
}

const CarCard = ({ car, isInWishlist, onToggleWishlist }: CarCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="carbecho-card h-full flex flex-col">
      <div className="relative">
        <img 
          src={imageError ? 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1937&auto=format&fit=crop' : car.image} 
          alt={`${car.brand} ${car.model}`} 
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
        <button 
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isInWishlist ? 'bg-carbecho-orange text-white' : 'bg-black/50 text-white'
          }`}
          onClick={() => onToggleWishlist(car)}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} fill={isInWishlist ? "white" : "none"} />
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
  );
};

export default CarCard;
