import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[85vh] pt-28 pb-16 flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gray-200/50 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gray-300/30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-gray-200/50 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-bold leading-tight">
              Professional <span className="bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">Law Firm Websites</span>
            </h1>
          </div>

          <p className={`text-2xl md:text-3xl font-medium text-gray-800 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Modern websites that build trust & win clients
          </p>

          <p className={`text-xl text-gray-600 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Your website should reflect the professionalism of your practice. We redesign outdated law firm websites into clean, credible, client-focused platforms that make it easier for people to trust you — and contact you.
          </p>

          <div className={`pt-8 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <Button asChild className="bg-rebels-navy hover:bg-rebels-slate text-white px-8 py-6 text-lg shadow-lg shadow-rebels-navy/30 hover:shadow-rebels-navy/50 transition-all duration-300">
              <a href="mailto:rian@99rebels.com">Request a Free Website Review</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
