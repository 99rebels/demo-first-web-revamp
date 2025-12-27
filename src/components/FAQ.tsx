
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

const FAQ = () => {
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
    
    const element = document.getElementById('faq');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent`}>
            Frequently Asked Questions
          </h2>
          
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-white rounded-xl shadow-xl p-6`}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-medium py-6 hover:text-rebels-blue transition-colors">
                  Do you only work with law firms?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6 text-gray-700">
                  Yes — we specialise exclusively in websites for legal professionals. This focus allows us to understand the unique needs of law firms, from compliance considerations to client intake optimisation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-medium py-6 hover:text-rebels-blue transition-colors">
                  What makes a good law firm website?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6 text-gray-700">
                  A great law firm website balances professionalism with approachability. It should clearly communicate your practice areas, make it easy for potential clients to get in touch, and establish trust through clean design and compelling content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-medium py-6 hover:text-rebels-blue transition-colors">
                  What are the AI features you offer?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6 text-gray-700">
                  We can integrate AI-powered chatbots that answer common client questions 24/7, automated FAQ systems that reduce repetitive enquiries, and smart intake forms that qualify leads before they reach you — all without providing legal advice.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
