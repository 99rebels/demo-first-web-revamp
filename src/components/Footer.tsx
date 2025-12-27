
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rebels-navy py-12 border-t border-rebels-navy">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="font-bold text-2xl text-white">
                99rebels
              </Link>
              <p className="text-gray-400 mt-2">
                Modern websites for law firms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
              <div>
                <h4 className="font-semibold mb-3 text-rebels-gold">Navigate</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-rebels-gold transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-300 hover:text-rebels-gold transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-rebels-gold transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-300 hover:text-rebels-gold transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-rebels-gold">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:rian@99rebels.com" className="text-gray-300 hover:text-rebels-gold transition-colors">
                      rian@99rebels.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+353852279887" className="text-gray-300 hover:text-rebels-gold transition-colors">
                      +353 85 227 9887
                    </a>
                  </li>
                  <li>
                    <p className="text-gray-500 mt-2 text-sm">
                      99rebels is a brand of corehings Ltd
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-700 text-center sm:text-left">
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
