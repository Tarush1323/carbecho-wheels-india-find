
import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative">
        <Car size={32} className="text-carbecho-orange animate-pulse-glow" />
      </div>
      <span className="text-2xl font-bold">
        Car<span className="text-carbecho-orange">Becho</span>
      </span>
    </Link>
  );
};

export default Logo;
