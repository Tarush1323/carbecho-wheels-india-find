
import { Search } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60 z-10"></div>
      <div 
        className="h-80 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470&auto=format&fit=crop')" }}
      ></div>
      
      <div className="carbecho-container absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
          Find Your Perfect Car in India
        </h1>
        <p className="text-lg text-white/80 text-center mb-8 max-w-3xl">
          Search from thousands of cars available across India. Find your ideal match with our advanced filters.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-xl flex">
          <input
            type="text"
            placeholder="Search by brand, model or type..."
            className="flex-grow carbecho-input border-r-0 rounded-r-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="carbecho-button rounded-l-none px-5 flex items-center justify-center"
          >
            <Search size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
