import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, FileText, Code, Rocket } from 'lucide-react';

const HowItWorks = () => {
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

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Free website review",
      description: "We analyse your current site and identify opportunities for improvement."
    },
    {
      icon: FileText,
      number: "2",
      title: "Clear improvement plan",
      description: "You receive actionable recommendations tailored to your firm."
    },
    {
      icon: Code,
      number: "3",
      title: "Redesign & build",
      description: "We create a modern, professional website that represents your practice."
    },
    {
      icon: Rocket,
      number: "4",
      title: "Smooth launch + optional support",
      description: "Go live with confidence, with ongoing support if you need it."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-rebels-navy relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 right-[15%] w-72 h-72 rounded-full bg-rebels-gold/5 animate-float"></div>
        <div className="absolute top-20 left-[10%] w-56 h-56 rounded-full bg-white/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-center mb-12 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            How It <span className="text-rebels-gold font-bold">Works</span>
          </h2>

          <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-rebels-navy flex items-center justify-center ring-2 ring-rebels-gold/60">
                        <step.icon className="text-rebels-gold" size={26} />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rebels-gold shadow-md flex items-center justify-center text-sm font-bold text-rebels-navy">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
