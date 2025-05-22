
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
    <section className="section bg-rebels-gray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div id="main" className={visibleSections.main ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-center mb-12">Why I Do This</h2>
          </div>
          
          {/* Section 1 */}
          <Card id="section1" className={`border-0 shadow-lg mb-12 ${visibleSections.section1 ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <CardContent className="p-8">
              <h3 className="text-rebels-blue mb-4">Small business owners are busy — so I take the first step.</h3>
              <p className="text-lg leading-relaxed mb-4">
                Running a small business means wearing ten hats at once. Whether you're a window cleaner, florist, electrician, or café owner, you probably don't have time to go chasing web designers.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>So I do it differently.</strong> I find businesses with websites that could use a refresh — then I rebuild the site as a live demo, record a short walkthrough video, and get in touch. No pitch, no pressure — just a chance to see what's possible.
              </p>
            </CardContent>
          </Card>
          
          {/* Section 2 */}
          <Card id="section2" className={`border-0 shadow-lg mb-12 ${visibleSections.section2 ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: "0.2s"}}>
            <CardContent className="p-8">
              <h3 className="text-rebels-blue mb-4">Why small businesses?</h3>
              <p className="text-lg leading-relaxed mb-4">
                Because small businesses are the heart of their communities — and they deserve to look the part online.
              </p>
              <p className="text-lg leading-relaxed">
                I've seen too many sites that make a great business look out-of-date, hard to trust, or worse — hard to use. I want to change that, one site at a time.
              </p>
            </CardContent>
          </Card>
          
          {/* Section 3 */}
          <Card id="section3" className={`border-0 shadow-lg mb-12 ${visibleSections.section3 ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: "0.4s"}}>
            <CardContent className="p-8">
              <h3 className="text-rebels-blue mb-4">Why build the site before reaching out?</h3>
              <p className="text-lg leading-relaxed mb-4">
                Because I believe in showing, not telling.
              </p>
              <p className="text-lg leading-relaxed">
                There's no hard sell here. I build a full working example before we even talk, so you can decide if it's something worth pursuing — no commitment required.
              </p>
            </CardContent>
          </Card>
          
          {/* Bottom line */}
          <Card id="section4" className={`border-0 shadow-lg ${visibleSections.section4 ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: "0.6s"}}>
            <CardContent className="p-8">
              <h3 className="text-rebels-blue mb-4">Bottom line:</h3>
              <p className="text-lg font-medium mb-4">
                I help small businesses level up their online presence with clean, modern websites.
              </p>
              <p className="text-lg italic">
                You've already built something real. I'm just here to make sure your website shows that.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
