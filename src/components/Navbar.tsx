
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-rebels-blue">
          99rebels
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-rebels-blue transition-colors">
            Home
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-rebels-blue transition-colors">
            Contact
          </Link>
          <Button asChild variant="outline" className="border-rebels-blue text-rebels-blue hover:bg-rebels-blue hover:text-white">
            <a href="mailto:Rian@99rebels.com">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden animate-fade-in">
            <div className="flex flex-col py-4">
              <Link 
                to="/" 
                className="px-6 py-3 hover:bg-gray-50 text-gray-700" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 hover:bg-gray-50 text-gray-700" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-6 py-3">
                <Button 
                  asChild 
                  className="w-full bg-rebels-blue hover:bg-rebels-darkblue"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="mailto:Rian@99rebels.com">Get in Touch</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
