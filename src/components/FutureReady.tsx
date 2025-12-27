import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const FutureReady = () => {
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

    const element = document.getElementById('future-ready');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="future-ready" className="section bg-rebels-slate relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-white/5 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="text-white" size={20} />
            <span className="text-white font-medium">Future-Ready</span>
          </div>

          <h2 className={`text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Built for Today — Ready for Tomorrow
          </h2>

          <p className={`text-xl text-white/90 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            As AI changes how clients search for and engage with legal help, firms with modern, client-friendly websites will stand out.
          </p>

          <p className={`text-lg text-white/80 mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We help bring your firm into that future — without complexity or disruption.
          </p>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl text-white font-medium mb-6">
              Let's make your website reflect the quality of your practice.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-rebels-slate hover:bg-gray-100 text-lg px-8 py-6 shadow-xl"
            >
              <a href="mailto:rian@99rebels.com">Request a Free Website Review</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureReady;
