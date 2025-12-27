import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const WhyItMatters = () => {
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

    const element = document.getElementById('why-it-matters');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const benefits = [
    "Build trust quickly",
    "Look as professional online as you are in person",
    "Make enquiries easier",
    "Stay competitive in a changing digital world"
  ];

  return (
    <section id="why-it-matters" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why This <span className="bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent font-bold">Matters</span>
          </h2>

          <p className={`text-xl text-gray-700 text-center mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A modern website helps your firm:
          </p>

          <div className={`space-y-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-rebels-navy flex items-center justify-center flex-shrink-0 ring-2 ring-rebels-gold/50">
                  <CheckCircle className="text-rebels-gold" size={22} />
                </div>
                <span className="text-lg text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>

          <p className={`text-xl text-gray-700 text-center mt-12 font-medium transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Clients form opinions <strong className="text-rebels-blue">long before they ever speak to you</strong>.
            <br />
            <span className="text-gray-600">Your website should work in your favour.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
