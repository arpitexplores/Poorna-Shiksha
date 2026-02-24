import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-optimized.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-foreground text-white">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-5 inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Poorna Shiksha"
                className="h-14 w-auto"
                width={384}
                height={159}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="max-w-lg text-sm leading-relaxed text-slate-300">
              Empowering the next generation in Delhi through quality education and emotional support.
              Join us in making a difference in these children's lives.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/activities" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Location</h4>
            <p className="text-sm text-slate-300">Delhi, India</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Poorna Shiksha. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>for the children of Delhi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
