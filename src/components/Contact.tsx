
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
    <section id="contact" className="section bg-rebels-gray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="mb-4">👋 Seen a video from me?</h2>
            <p className="text-xl mb-8">
              If I sent you a walkthrough, feel free to get in touch. Totally up to you — just an open door if you're interested.
            </p>

            <Card className="border-0 shadow-lg p-8 md:p-12 text-center">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-rebels-blue flex items-center justify-center mb-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <a 
                    href="mailto:Rian@99rebels.com" 
                    className="text-rebels-blue hover:underline"
                  >
                    Rian@99rebels.com
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-rebels-blue flex items-center justify-center mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Call or Text</h3>
                  <a 
                    href="tel:+353852279887" 
                    className="text-rebels-blue hover:underline"
                  >
                    +353 85 227 9887
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild className="bg-rebels-blue hover:bg-rebels-darkblue text-white px-8 py-6 text-lg">
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
