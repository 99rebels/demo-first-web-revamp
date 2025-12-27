import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { XCircle } from 'lucide-react';

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

  const painPoints = [
    "look dated or unprofessional",
    "are slow or not mobile-friendly",
    "overwhelm visitors with dense text",
    "fail to clearly explain services",
    "make it difficult to get in touch"
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Does your current website reflect the{' '}
            <span className="bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent font-bold">
              quality of your practice?
            </span>
          </h2>

          <p className={`text-xl text-gray-700 text-center mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Many great firms unintentionally lose clients before the first conversation because their websites:
          </p>

          <Card className={`border-0 shadow-xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 md:p-12 bg-gradient-to-br from-white to-gray-50">
              <div className="space-y-4">
                {painPoints.map((point, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 transition-all duration-500`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <XCircle className="text-red-400 flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-xl text-gray-800 leading-relaxed">
                  In today's world, your website is your <strong className="text-rebels-blue">first impression</strong>.
                </p>
                <p className="text-xl text-gray-600 mt-4">
                  If it doesn't inspire confidence, potential clients look elsewhere.
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
