
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-carbecho-dark-card border-t border-carbecho-dark-border mt-16">
      <div className="carbecho-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              CarBecho is India's leading platform for finding your perfect car match. 
              We help buyers find the best cars at the best prices.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Browse Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Car Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Sedans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">SUVs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Hatchbacks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Luxury Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-carbecho-orange transition-colors">Electric Vehicles</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-carbecho-orange" />
                <span className="text-gray-400">123 Auto Lane, Mumbai, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-carbecho-orange" />
                <span className="text-gray-400">+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-carbecho-orange" />
                <span className="text-gray-400">info@carbecho.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-carbecho-dark-border mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CarBecho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
