
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
          <h2 className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Frequently Asked Questions
          </h2>
          
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: "0.2s"}}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-medium py-6 hover:text-rebels-blue transition-colors">
                  Do you only work with tradies?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6">
                  Nope — I focus on small businesses of all types. Trades are just where I've been focusing lately, since a lot of them don't have time to chase down web help.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-medium py-6 hover:text-rebels-blue transition-colors">
                  How did you find my business?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6">
                  I look for websites that seem outdated or hard to use — then I rebuild them with modern design and best practices. If I send you a version, it's because I genuinely thought I could help.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-medium py-6 hover:text-rebels-blue transition-colors">
                  How much does this cost?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6">
                  Nothing up front. The demo is free. If you like what you see, we can talk about pricing and options — no pressure either way.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-medium py-6 hover:text-rebels-blue transition-colors">
                  Is this legit?
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-6">
                  Yes — and this site is here to help prove that. I'm a solo developer, and I do all the work myself. You'll never be talking to a bot or agency middleman.
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
