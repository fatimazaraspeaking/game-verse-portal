
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/layout/Layout';

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl mb-6">Oops! This page got lost in the game world</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved to another universe.
          </p>
          <Link to="/" className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
