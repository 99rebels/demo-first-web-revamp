
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface Testimonial {
  name: string;
  business: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "James O'Sullivan",
    business: "O'Sullivan & Partners — Family Law",
    quote: "Our old website looked like it was from 2010. Since the redesign, we've seen a noticeable increase in consultation requests.",
    stars: 5
  },
  {
    name: "Sarah McCarthy",
    business: "McCarthy Commercial Solicitors",
    quote: "The AI chatbot feature has been a game-changer. It handles basic enquiries 24/7, and we're capturing leads we would have missed before.",
    stars: 5
  },
  {
    name: "David Brennan",
    business: "Brennan Criminal Defence",
    quote: "Professional, responsive, and they understood exactly what a law firm needs. The new site gives potential clients confidence from the first click.",
    stars: 5
  }
];

const Testimonials = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.replace('testimonial-', ''));
            setVisibleItems(prev => [...prev, id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    testimonials.forEach((_, index) => {
      const element = document.getElementById(`testimonial-${index}`);
      if (element) observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gray-200/30 animate-float"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-gray-300/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-gray-200/30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-16 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">
            What Law Firms Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                id={`testimonial-${index}`} 
                key={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="border-0 h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex mb-4 text-rebels-gold">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          size={16}
                          className={i < testimonial.stars ? 'fill-rebels-gold text-rebels-gold' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="flex-grow mb-6">
                      <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                    </blockquote>
                    
                    <footer className="mt-auto">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-rebels-darkblue">{testimonial.business}</p>
                    </footer>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
