
import { useState, useEffect } from "react";
import { CarType } from "../services/carService";
import { toast } from "sonner";

const WISHLIST_KEY = "carbecho-wishlist";

interface UseWishlistReturn {
  wishlist: CarType[];
  addToWishlist: (car: CarType) => void;
  removeFromWishlist: (carId: string) => void;
  isInWishlist: (carId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlist = (): UseWishlistReturn => {
  const [wishlist, setWishlist] = useState<CarType[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem(WISHLIST_KEY);
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error);
        localStorage.removeItem(WISHLIST_KEY);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (car: CarType) => {
    if (!isInWishlist(car.id)) {
      setWishlist((prev) => [...prev, car]);
      toast.success(`${car.brand} ${car.model} added to wishlist`);
    }
  };

  const removeFromWishlist = (carId: string) => {
    setWishlist((prev) => {
      const car = prev.find(c => c.id === carId);
      const newWishlist = prev.filter((car) => car.id !== carId);
      
      if (car) {
        toast.success(`${car.brand} ${car.model} removed from wishlist`);
      }
      
      return newWishlist;
    });
  };

  const isInWishlist = (carId: string): boolean => {
    return wishlist.some((car) => car.id === carId);
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.success("Wishlist cleared");
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };
};
