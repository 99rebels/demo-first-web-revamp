import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const [visibleSections, setVisibleSections] = useState({
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

      const element = document.getElementById(`about-${sectionKey}`);
      if (element) observer.observe(element);

      return { key: sectionKey, observer };
    });

    return () => {
      observers.forEach(({ observer }) => {
        observer.disconnect();
      });
    };
  }, []);

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[5%] w-72 h-72 rounded-full bg-gray-200/30 animate-float"></div>
        <div className="absolute bottom-40 left-[10%] w-80 h-80 rounded-full bg-gray-300/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-[15%] w-64 h-64 rounded-full bg-gray-200/30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Why Law Firms Choose 99rebels */}
          <Card id="about-section1"
            className={`border-0 shadow-xl mb-12 transform transition-all duration-700 ${
              visibleSections.section1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl`}
          >
            <CardContent className="p-8 bg-white/90 backdrop-blur-sm">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent mb-6">
                Why Law Firms Choose 99rebels
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Most law firm websites don't fail because of technology.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                They fail because they don't communicate <strong>confidence, clarity, or trust</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                We specialise in modernising law firm websites so they:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "look professional",
                  "feel trustworthy",
                  "are easy for potential clients to understand",
                  "make contacting the firm simple and reassuring"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                    <span className="w-2 h-2 bg-rebels-gold rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Section 2: Our Approach */}
          <Card id="about-section2"
            className={`border-0 shadow-xl mb-12 transform transition-all duration-700 delay-200 ${
              visibleSections.section2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl`}
          >
            <CardContent className="p-8 bg-white/90 backdrop-blur-sm">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent mb-6">
                Our Approach
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                We keep things:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "straightforward",
                  "professional",
                  "respectful of your time",
                  "focused on outcomes"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                    <span className="w-2 h-2 bg-rebels-gold rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed text-gray-600 italic">
                No gimmicks. No jargon. Just a website that reflects the quality of your practice.
              </p>
            </CardContent>
          </Card>

          {/* Section 3: Built for Today */}
          <Card id="about-section3"
            className={`border-0 shadow-xl mb-12 transform transition-all duration-700 delay-400 ${
              visibleSections.section3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl`}
          >
            <CardContent className="p-8 bg-white/90 backdrop-blur-sm">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent mb-6">
                Built for Today — Ready for Tomorrow
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                As AI reshapes expectations, having a strong, modern digital presence matters more than ever.
              </p>
              <p className="text-lg leading-relaxed">
                We help your firm stay relevant and credible without disruption.
              </p>
            </CardContent>
          </Card>

          {/* Bottom line */}
          <Card id="about-section4"
            className={`border-0 shadow-xl transform transition-all duration-700 delay-600 ${
              visibleSections.section4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:shadow-2xl`}
          >
            <CardContent className="p-8 bg-rebels-slate text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
              <div className="relative z-10 text-center">
                <p className="text-xl mb-6">
                  If your website isn't sending the right message, it's worth fixing.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-rebels-slate hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <a href="mailto:rian@99rebels.com">Request a Free Website Review</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
