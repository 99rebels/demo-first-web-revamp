
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const About = () => {
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
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="section bg-gradient-to-b from-white to-[#f0f7ff]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent`}>
            Who's Behind <span className="font-bold">99rebels?</span>
          </h2>
          
          <Card className={`border-0 shadow-xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 md:p-12 bg-gradient-to-br from-white to-[#f0f7ff]">
              <div className="relative">
                
                <p className="text-xl leading-relaxed mb-6 pt-8">
                  I'm the solo developer behind 99rebels. I started this project because I noticed a lot of great businesses were being held back by websites that didn't reflect the quality of their work.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  So now, I find those sites, rebuild them (free), and show you what your business could look like online — without asking for anything upfront. If you like it, we talk. If not, no hard feelings.
                </p>
                <p className="text-xl leading-relaxed font-medium bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">
                  This site exists to help you verify I'm real and that I know what I'm doing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
