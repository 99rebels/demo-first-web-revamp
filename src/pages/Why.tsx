
import WhySection from "@/components/WhySection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Why = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById("hero-section");
      
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        if (scrollPosition > heroBottom - 600) {
          document.getElementById("content-section")?.classList.add("fade-in");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section id="hero-section" className="py-16 md:py-24 bg-gradient-to-br from-[#f0f7ff] via-white to-[#e6f0ff]">
          <div className="container mx-auto">
            <div 
              className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative mb-8 inline-block">
                <h1 className="mb-2 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent relative z-10">
                  Why I Do This
                </h1>
                {/* 3D effect elements for the heading */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-rebels-blue/20 rounded-full blur-xl"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-white rounded-full"></div>
                <div className="absolute -bottom-1 -right-3 w-20 h-20 bg-rebels-blue/5 rounded-full blur-md"></div>
                <div className="absolute -top-3 -left-8 w-16 h-16 bg-rebels-blue/10 rounded-full blur-md animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-white/20 rounded-xl"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-12 relative">
                <span className="relative inline-block">
                  The philosophy and purpose behind my approach to web development.
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rebels-blue/50 to-transparent"></div>
                </span>
              </p>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 animate-bounce">
                <div className="w-6 h-10 border-2 border-rebels-blue rounded-full flex justify-center items-start p-1">
                  <div className="w-1 h-3 bg-rebels-blue rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Scroll down</p>
              </div>
            </div>
          </div>
        </section>
        
        <div id="content-section" className="opacity-0 transition-all duration-1000 translate-y-6">
          <WhySection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Why;
