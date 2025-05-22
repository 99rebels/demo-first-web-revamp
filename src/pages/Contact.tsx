
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const ContactPage = () => {
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
    
    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 bg-gradient-to-b from-rebels-blue/10 via-white to-[#f0f7ff]">
        <section id="contact-section" className="section">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative mb-10 inline-block">
                  {/* 3D effect layers for the heading */}
                  <div className="absolute -z-10 blur-lg w-full h-full bg-rebels-blue/20 rounded-full transform scale-150"></div>
                  <div className="absolute -z-10 top-6 left-0 w-full h-12 bg-gradient-to-r from-rebels-blue/40 to-rebels-darkblue/40 rounded-full blur-xl"></div>
                  
                  <h1 className="inline-block mb-3 relative z-10">
                    <span className="bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent relative">
                      Let's talk.
                    </span>
                    {/* Refracted light effect */}
                    <div className="absolute -top-10 left-5 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-rebels-blue/20 rounded-full blur-lg"></div>
                    <div className="absolute -top-1 left-10 w-2 h-10 bg-white/40 rounded-full blur-sm rotate-45"></div>
                    <div className="absolute -top-1 right-10 w-2 h-10 bg-white/40 rounded-full blur-sm -rotate-45"></div>
                  </h1>
                </div>
                
                <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed relative">
                  <span className="relative">
                    If I've been in touch and you're checking things out — welcome. I'm the person behind 99rebels, a small web dev studio focused on building better sites for small businesses. If you've received a walkthrough video or just want to ask a question, feel free to reach out.
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rebels-blue/30 to-transparent"></div>
                  </span>
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
                <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/80 group">
                  <CardContent className="p-8 flex flex-col items-center text-center relative overflow-hidden">
                    {/* Depth-creating elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-rebels-blue/5 rounded-full blur-xl group-hover:bg-rebels-blue/10 transition-all duration-300"></div>
                    
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-rebels-blue to-rebels-darkblue flex items-center justify-center mb-6 mt-4 shadow-lg animate-float relative">
                      <div className="absolute inset-0 rounded-full bg-white/10 scale-110 blur-sm"></div>
                      <Mail className="text-white relative z-10" size={30} />
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-white/30 rounded-full blur-sm"></div>
                    </div>
                    <h3 className="text-2xl font-medium mb-3 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent relative z-10">Email</h3>
                    <a 
                      href="mailto:Rian@99rebels.com" 
                      className="text-rebels-blue hover:text-rebels-darkblue transition-colors text-lg relative group z-10"
                    >
                      Rian@99rebels.com
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rebels-blue transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/80 group">
                  <CardContent className="p-8 flex flex-col items-center text-center relative overflow-hidden">
                    {/* Depth-creating elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-rebels-blue/5 rounded-full blur-xl group-hover:bg-rebels-blue/10 transition-all duration-300"></div>
                    
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-rebels-blue to-rebels-darkblue flex items-center justify-center mb-6 mt-4 shadow-lg animate-float relative" style={{ animationDelay: "1s" }}>
                      <div className="absolute inset-0 rounded-full bg-white/10 scale-110 blur-sm"></div>
                      <Phone className="text-white relative z-10" size={30} />
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-white/30 rounded-full blur-sm"></div>
                    </div>
                    <h3 className="text-2xl font-medium mb-3 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent relative z-10">Text or WhatsApp</h3>
                    <a 
                      href="tel:+353852279887" 
                      className="text-rebels-blue hover:text-rebels-darkblue transition-colors text-lg relative group z-10"
                    >
                      +353 85 227 9887
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rebels-blue transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="border-0 shadow-xl mt-16 max-w-2xl mx-auto transition-all duration-700 delay-400 group transform hover:translate-y-[-5px] hover:shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rebels-blue to-rebels-darkblue rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-rebels-blue to-rebels-darkblue opacity-80 rounded-lg"></div>
                {/* Light reflections */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                
                {/* Horizontal light streak */}
                <div className="absolute top-1/4 left-0 right-0 h-px bg-white/50"></div>
                <div className="absolute top-3/4 left-0 right-0 h-px bg-white/30"></div>
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-t-lg"></div>
                <CardContent className="p-8 text-center relative z-10 text-white">
                  <h3 className="text-2xl font-medium mb-4 flex items-center justify-center gap-2">
                    <span className="w-8 h-1 bg-white/50 rounded-full"></span>
                    Trust Note
                    <span className="w-8 h-1 bg-white/50 rounded-full"></span>
                  </h3>
                  <p className="text-lg leading-relaxed">
                    I'm a solo developer — no sales teams, no spam. Just genuine work and open communication.
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-lg"></div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
