
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedWork = () => {
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
    
    const element = document.getElementById('featured-work');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Local Café Rebrand",
      description: "Modern, responsive design with online ordering capabilities.",
      color: "from-rebels-blue to-[#63A1FF]"
    },
    {
      id: 2,
      title: "Electrician Service Site",
      description: "Fast-loading site with service booking and quote requests.",
      color: "from-[#3565C7] to-[#5E8FE6]"
    },
    {
      id: 3,
      title: "Florist Shop Redesign",
      description: "Beautiful showcase with integrated payment processing.",
      color: "from-[#2B4DAD] to-[#4D75D9]"
    }
  ];

  return (
    <section id="featured-work" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-bold mb-4 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Examples of websites I've rebuilt for small businesses, showing the power of modern web design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`border-0 overflow-hidden transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`h-40 bg-gradient-to-r ${project.color}`}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="ghost" className="group p-0 h-auto text-rebels-blue hover:text-rebels-darkblue hover:bg-transparent">
                    <span className="mr-1">View project</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
