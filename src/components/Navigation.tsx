import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-optimized.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Activities", path: "/activities" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/85 backdrop-blur-md">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Poorna Shiksha"
              className="h-12 w-auto md:h-14"
              width={384}
              height={159}
              decoding="async"
            />
          </Link>

          <div className="ml-auto flex items-center gap-3">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative py-2 text-sm font-semibold transition-colors",
                    "after:absolute after:left-1/2 after:top-full after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300",
                    isActive(link.path)
                      ? "text-foreground after:w-[72%]"
                      : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-[42%]",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link
              to="/support"
              className={cn(buttonVariants({ variant: "default", size: "default" }), "hidden md:inline-flex")}
            >
              Support
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative h-10 w-10 rounded-md text-foreground transition-colors hover:bg-muted"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <Menu
                size={20}
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200",
                  isOpen && "rotate-90 scale-75 opacity-0",
                )}
              />
              <X
                size={20}
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200",
                  !isOpen && "-rotate-90 scale-75 opacity-0",
                )}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[380px] pb-4 opacity-100" : "max-h-0 pb-0 opacity-0",
          )}
          aria-hidden={!isOpen}
        >
          <div className="space-y-1 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-sm transition-colors",
                  isActive(link.path)
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/support"
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "mt-2 flex w-full justify-center")}
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
