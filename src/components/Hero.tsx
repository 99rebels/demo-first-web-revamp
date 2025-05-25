import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-[#eef7ff] via-white to-[#f0f7ff] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-rebels-blue/5 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-rebels-lightblue/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-rebels-blue/5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-bold leading-tight">
              A Fresh Website — <span className="bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">Before You Even Asked.</span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl text-gray-700 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            I'm a web developer who rebuilds outdated websites for small businesses — like cafés, florists, sparkies, and more — and shows you the result before you spend a cent.
          </p>
          
          <div className={`pt-8 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <Button asChild className="bg-rebels-blue hover:bg-rebels-darkblue text-white px-8 py-6 text-lg shadow-lg shadow-rebels-blue/30 hover:shadow-rebels-blue/50 transition-all duration-300">
              <Link to="/why">Why I Do This</Link>
            </Button>
            <Button asChild variant="outline" className="border-rebels-blue text-rebels-blue hover:bg-rebels-blue hover:text-white px-8 py-6 text-lg transition-all duration-300">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        
        <div className={`mt-16 md:mt-24 max-w-4xl mx-auto rounded-xl overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 shadow-2xl shadow-rebels-darkblue/20' : 'opacity-0 translate-y-10'}`}>
          <div className="aspect-[16/9] relative w-full">
            <iframe
              src="https://www.loom.com/embed/9e09a72445d746549e276a9731d13004?sid=43ab5938-7b5d-4243-8d37-6df101f209c9"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              title="99rebels Demo Video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
