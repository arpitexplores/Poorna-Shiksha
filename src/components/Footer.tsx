import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>for the children of Delhi</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Learning with Love. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
