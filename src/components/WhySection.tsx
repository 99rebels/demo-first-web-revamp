
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhySection = () => {
  const [visibleSections, setVisibleSections] = useState({
    main: false,
    section1: false,
    section2: false,
    section3: false,
    section4: false
  });
  
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const observers = Object.keys(visibleSections).map(sectionKey => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [sectionKey]: true }));
          observer.disconnect();
        }
      }, observerOptions);
      
      const element = document.getElementById(sectionKey);
      if (element) observer.observe(element);
      
      return { key: sectionKey, observer };
    });
    
    return () => {
      observers.forEach(({ key, observer }) => {
        const element = document.getElementById(key);
        if (element) observer.disconnect();
      });
    };
  }, []);

  return (
    <section className="section bg-gradient-to-b from-[#f0f7ff] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-5% w-72 h-72 rounded-full bg-rebels-blue/5 animate-float"></div>
        <div className="absolute bottom-40 left-10% w-80 h-80 rounded-full bg-rebels-lightblue/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-15% w-64 h-64 rounded-full bg-rebels-blue/5 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <Card id="section1" 
            className={`border-0 shadow-xl mb-12 transform transition-all duration-700 ${
              visibleSections.section1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl hover:shadow-rebels-blue/10 transition-all duration-300`}
          >
            <CardContent className="p-8 bg-white/90 backdrop-blur-sm">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-rebels-blue rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent mb-4 pl-6">
                Small business owners are busy — so I take the first step.
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Running a small business means wearing ten hats at once. Whether you're a window cleaner, florist, electrician, or café owner, you probably don't have time to go chasing web designers.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>So I do it differently.</strong> I find businesses with websites that could use a refresh — then I rebuild the site as a live demo, record a short walkthrough video, and get in touch. No pitch, no pressure — just a chance to see what's possible.
              </p>
            </CardContent>
          </Card>
          
          {/* Section 2 */}
          <Card id="section2" 
            className={`border-0 shadow-xl mb-12 transform transition-all duration-700 delay-200 ${
              visibleSections.section2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl hover:shadow-rebels-blue/10 transition-all duration-300`}
          >
            <CardContent className="p-8 bg-white/90 backdrop-blur-sm">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-rebels-blue rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent mb-4 pl-6">
                Why small businesses?
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Because small businesses are the heart of their communities — and they deserve to look the part online.
              </p>
              <p className="text-lg leading-relaxed">
                I've seen too many sites that make a great business look out-of-date, hard to trust, or worse — hard to use. I want to change that, one site at a time.
              </p>
            </CardContent>
          </Card>
          
          {/* Section 3 */}
          <Card id="section3" 
            className={`border-0 shadow-xl mb-12 transform transition-all duration-700 delay-400 ${
              visibleSections.section3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl hover:shadow-rebels-blue/10 transition-all duration-300`}
          >
            <CardContent className="p-8 bg-white/90 backdrop-blur-sm">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-rebels-blue rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent mb-4 pl-6">
                Why build the site before reaching out?
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Because I believe in showing, not telling.
              </p>
              <p className="text-lg leading-relaxed">
                There's no hard sell here. I build a full working example before we even talk, so you can decide if it's something worth pursuing — no commitment required.
              </p>
            </CardContent>
          </Card>
          
          {/* Bottom line */}
          <Card id="section4" 
            className={`border-0 shadow-xl transform transition-all duration-700 delay-600 ${
              visibleSections.section4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl hover:shadow-rebels-blue/10 transition-all duration-300`}
          >
            <CardContent className="p-8 bg-gradient-to-br from-rebels-blue to-rebels-darkblue text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Bottom line:</h3>
                <p className="text-xl font-medium mb-4">
                  I help small businesses level up their online presence with clean, modern websites.
                </p>
                <p className="text-lg italic">
                  You've already built something real. I'm just here to make sure your website shows that.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
