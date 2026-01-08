import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <Link to="/">
            <img src={logo} alt="Poorna Shiksha" className="h-12" />
          </Link>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>for the children of Delhi</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Poorna Shiksha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
