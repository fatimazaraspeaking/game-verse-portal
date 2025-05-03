
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "GameVerse - Free Online HTML5 Games Portal", 
  description = "Play thousands of free online HTML5 games instantly. No downloads, just fun! Action, puzzle, racing, and more at GameVerse.",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png"
}) => {
  
  // Update document metadata when component mounts or props change
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      description: description,
      "og:type": "website",
      "og:title": title,
      "og:description": description,
      "og:image": ogImage,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage,
    };
    
    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      // Check if meta tag exists
      let metaElement = document.querySelector(`meta[name="${name}"]`) || 
                         document.querySelector(`meta[property="${name}"]`);
      
      if (!metaElement) {
        // Create new meta tag if it doesn't exist
        metaElement = document.createElement('meta');
        if (name.startsWith('og:')) {
          metaElement.setAttribute('property', name);
        } else {
          metaElement.setAttribute('name', name);
        }
        document.head.appendChild(metaElement);
      }
      
      // Set content attribute
      metaElement.setAttribute('content', content);
    });
    
    // Cleanup function to restore original title
    return () => {
      // You could reset meta tags here if needed
    };
  }, [title, description, ogImage]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
