
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
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Who's Behind <span className="text-rebels-blue">99rebels?</span>
          </h2>
          
          <Card className={`border-0 shadow-lg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: "0.2s"}}>
            <CardContent className="p-8 md:p-12">
              <p className="text-xl leading-relaxed mb-6">
                Hey — I'm the solo developer behind 99rebels. I'm 18 and in my fifth year of school, but I've been building websites for years. I started this project because I noticed a lot of great businesses were being held back by websites that didn't reflect the quality of their work.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                So now, I find those sites, rebuild them (free), and show you what your business could look like online — without asking for anything upfront. If you like it, we talk. If not, no hard feelings.
              </p>
              <p className="text-xl leading-relaxed font-medium text-rebels-blue">
                This site exists to help you verify I'm real and that I know what I'm doing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
