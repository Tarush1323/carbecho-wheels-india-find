
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CarType, getCarById } from "../services/carService";
import { formatPrice } from "../utils/formatter";
import { useWishlist } from "../hooks/useWishlist";
import { ArrowLeft, Heart, Fuel, Users, Gauge, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [car, setCar] = useState<CarType | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    const fetchCar = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const carData = await getCarById(id);
        if (carData) {
          setCar(carData);
        } else {
          // Car not found, navigate back
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching car:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id, navigate]);

  const handleWishlistToggle = () => {
    if (!car) return;
    
    if (isInWishlist(car.id)) {
      removeFromWishlist(car.id);
    } else {
      addToWishlist(car);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="carbecho-container py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-80 bg-gray-700 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="h-12 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-1/2 mb-4"></div>
                <div className="h-32 bg-gray-700 rounded mb-6"></div>
                <div className="h-8 bg-gray-700 rounded mb-2"></div>
                <div className="h-48 bg-gray-700 rounded"></div>
              </div>
              <div>
                <div className="h-64 bg-gray-700 rounded mb-4"></div>
                <div className="h-12 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!car) {
    return (
      <>
        <Navbar />
        <div className="carbecho-container py-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Car Not Found</h2>
          <p className="mb-6">Sorry, we couldn't find the car you're looking for.</p>
          <button 
            onClick={() => navigate("/")}
            className="carbecho-button flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const isWishlisted = isInWishlist(car.id);

  return (
    <>
      <Navbar />
      <div className="carbecho-container py-8">
        {/* Back button */}
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-gray-400 hover:text-carbecho-orange mb-6 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Cars
        </button>
        
        {/* Car images */}
        <div className="mb-8">
          <img 
            src={imageError 
              ? 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1937&auto=format&fit=crop' 
              : car.image
            } 
            alt={`${car.brand} ${car.model}`} 
            className="w-full h-96 object-cover rounded-lg"
            onError={handleImageError}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main car details */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <button
                onClick={handleWishlistToggle}
                className={`p-2 rounded-full ${
                  isWishlisted ? 'bg-carbecho-orange text-white' : 'bg-carbecho-dark-border text-white'
                }`}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={20} fill={isWishlisted ? "white" : "none"} />
              </button>
            </div>
            <p className="text-2xl font-semibold text-carbecho-orange mb-6">{formatPrice(car.price)}</p>
            
            {/* Key specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="carbecho-card p-4 flex flex-col items-center text-center">
                <Fuel size={24} className="text-carbecho-orange mb-2" />
                <span className="text-sm text-gray-400">Fuel Type</span>
                <span className="font-medium">{car.fuelType}</span>
              </div>
              <div className="carbecho-card p-4 flex flex-col items-center text-center">
                <Users size={24} className="text-carbecho-orange mb-2" />
                <span className="text-sm text-gray-400">Seating</span>
                <span className="font-medium">{car.seatingCapacity} People</span>
              </div>
              <div className="carbecho-card p-4 flex flex-col items-center text-center">
                <Gauge size={24} className="text-carbecho-orange mb-2" />
                <span className="text-sm text-gray-400">Mileage</span>
                <span className="font-medium">
                  {car.fuelType === 'Electric' ? 'N/A' : `${car.mileage} kmpl`}
                </span>
              </div>
              <div className="carbecho-card p-4 flex flex-col items-center text-center">
                <Calendar size={24} className="text-carbecho-orange mb-2" />
                <span className="text-sm text-gray-400">Year</span>
                <span className="font-medium">{car.year}</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {car.description}
              </p>
            </div>
            
            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-carbecho-orange rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact & action sidebar */}
          <div>
            <div className="carbecho-card p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Interested in this car?</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input type="text" className="carbecho-input w-full" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input type="tel" className="carbecho-input w-full" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="carbecho-input w-full" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="carbecho-input w-full h-24" placeholder="I'm interested in this car. Please contact me."></textarea>
                </div>
                <button type="button" className="carbecho-button w-full">
                  Send Inquiry
                </button>
              </form>
            </div>
            
            <div className="carbecho-card p-6">
              <h3 className="text-lg font-semibold mb-4">Car Seller</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-carbecho-dark-border rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">CB</span>
                </div>
                <div>
                  <p className="font-medium">CarBecho Official</p>
                  <p className="text-sm text-gray-400">Verified Seller</p>
                </div>
              </div>
              <button className="carbecho-button-outline w-full">
                View Seller Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarDetail;
