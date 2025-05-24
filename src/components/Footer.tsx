
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="font-bold text-2xl text-rebels-blue">
                99rebels
              </Link>
              <p className="text-gray-600 mt-2">
                Modernizing small business websites.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
              <div>
                <h4 className="font-semibold mb-3">Navigate</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-rebels-blue transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-rebels-blue transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:Rian@99rebels.com" className="text-gray-600 hover:text-rebels-blue transition-colors">
                      rian@99rebels.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+353852279887" className="text-gray-600 hover:text-rebels-blue transition-colors">
                      +353 85 227 9887
                    </a>
                  </li>
                  <li><p className="text-gray-600 mt-2">
                99rebels is a brand of corehings Ltd
              </p></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200 text-center sm:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} 99rebels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
