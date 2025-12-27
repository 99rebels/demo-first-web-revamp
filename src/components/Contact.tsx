
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="mb-4 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">Ready to discuss your website?</h2>
            <p className="text-xl mb-8 text-gray-700">
              If you'd like a free, practical review of your current website, get in touch and we'll come back with clear recommendations — no obligation.
            </p>

            <Card className="border-0 shadow-xl p-8 md:p-12 text-center bg-gradient-to-br from-white to-gray-50">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-rebels-navy flex items-center justify-center mb-4 shadow-lg ring-2 ring-rebels-gold/40">
                    <Mail className="text-rebels-gold" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <a
                    href="mailto:rian@99rebels.com"
                    className="text-rebels-blue hover:text-rebels-darkblue transition-colors"
                  >
                    rian@99rebels.com
                  </a>
                </div>

                <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-rebels-navy flex items-center justify-center mb-4 shadow-lg ring-2 ring-rebels-gold/40">
                    <Phone className="text-rebels-gold" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Call or Text</h3>
                  <a
                    href="tel:+353852279887"
                    className="text-rebels-blue hover:text-rebels-darkblue transition-colors"
                  >
                    +353 85 227 9887
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild className="bg-rebels-navy hover:bg-rebels-slate text-white px-8 py-6 text-lg shadow-lg shadow-rebels-navy/30 hover:shadow-rebels-navy/50 transition-all duration-300">
                  <Link to="/contact">Visit Contact Page</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
