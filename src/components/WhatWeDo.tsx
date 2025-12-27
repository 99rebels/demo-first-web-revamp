import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Shield, Target, Smartphone, Zap, Layout, Bot } from 'lucide-react';

const WhatWeDo = () => {
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

    const element = document.getElementById('what-we-do');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const features = [
    { icon: Palette, label: "Professional, confident design" },
    { icon: Shield, label: "Trust & authority" },
    { icon: Target, label: "Clarity of services" },
    { icon: Layout, label: "Strong calls-to-action" },
    { icon: Smartphone, label: "Mobile-first performance" },
    { icon: Zap, label: "Speed, security & reliability" }
  ];

  return (
    <section id="what-we-do" className="section bg-rebels-navy relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-rebels-gold/5 animate-float"></div>
        <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-center mb-6 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What We <span className="text-rebels-gold font-bold">Do</span>
          </h2>

          <p className={`text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We modernise law firm websites with a focus on:
          </p>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white hover:border-rebels-gold/30 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rebels-navy flex items-center justify-center flex-shrink-0 ring-2 ring-rebels-gold/60">
                    <feature.icon className="text-rebels-gold" size={24} />
                  </div>
                  <span className="text-lg font-medium text-gray-800">{feature.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className={`border-0 shadow-xl bg-white transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-rebels-navy flex items-center justify-center flex-shrink-0 ring-2 ring-rebels-gold/60">
                <Bot className="text-rebels-gold" size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">AI Intake Assistant</h3>
                  <span className="text-sm text-rebels-gold font-medium bg-rebels-gold/10 px-2 py-1 rounded">Optional</span>
                </div>
                <p className="text-gray-700">
                  Handle FAQs and capture enquiries automatically — without providing legal advice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
