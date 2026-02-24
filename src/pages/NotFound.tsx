import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="page-shell">
      <section className="section-pad">
        <div className="section-shell">
          <div className="panel-card mx-auto max-w-2xl p-8 text-center md:p-12">
            <p className="eyebrow">Page Not Found</p>
            <h1 className="mt-4 text-6xl font-black text-foreground md:text-7xl">404</h1>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
              Oops! The page you are looking for does not exist or may have moved.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
