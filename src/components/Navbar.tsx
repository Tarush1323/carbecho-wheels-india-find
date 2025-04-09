
import { Search, Heart, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-carbecho-dark py-4 sticky top-0 z-50 border-b border-carbecho-dark-border">
      <div className="carbecho-container flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
            Home
          </Link>
          <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
            Browse Cars
          </Link>
          <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
            About
          </Link>
          <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-white hover:text-carbecho-orange transition-colors">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="text-white hover:text-carbecho-orange transition-colors relative">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 bg-carbecho-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-carbecho-orange transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-carbecho-dark-card py-4 px-6 mt-2 rounded-b-lg">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
              Home
            </Link>
            <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
              Browse Cars
            </Link>
            <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
              About
            </Link>
            <Link to="/" className="text-white hover:text-carbecho-orange transition-colors">
              Contact
            </Link>
            <div className="flex items-center gap-4 pt-2 border-t border-carbecho-dark-border">
              <button className="text-white hover:text-carbecho-orange transition-colors">
                <Search size={20} />
              </button>
              <Link to="/wishlist" className="text-white hover:text-carbecho-orange transition-colors relative">
                <Heart size={20} />
                <span className="absolute -top-2 -right-2 bg-carbecho-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
