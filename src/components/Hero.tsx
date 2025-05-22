
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-b from-rebels-gray to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="font-bold leading-tight animate-fade-in-up">
            A Fresh Website — <span className="text-rebels-blue">Before You Even Asked.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            I'm a web developer who rebuilds outdated websites for small businesses — like cafés, florists, sparkies, and more — and shows you the result before you spend a cent.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <Button asChild className="bg-rebels-blue hover:bg-rebels-darkblue text-white px-8 py-6 text-lg">
              <a href="#about">Learn More</a>
            </Button>
            <Button asChild variant="outline" className="border-rebels-blue text-rebels-blue hover:bg-rebels-blue hover:text-white px-8 py-6 text-lg">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto rounded-xl shadow-xl overflow-hidden animate-fade-in-up" style={{animationDelay: "0.6s"}}>
          <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center">
            <div className="text-center p-12">
              <p className="text-2xl font-medium text-gray-400">Demo Showcase Image</p>
              <p className="text-gray-400 mt-2">Website Before/After Comparison</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
