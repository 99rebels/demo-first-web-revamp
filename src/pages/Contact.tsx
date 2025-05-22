
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Video } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 bg-gradient-to-b from-rebels-gray via-white to-[#f0f7ff]">
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="mb-6 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">Let's talk.</h1>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                  If I've been in touch and you're checking things out — welcome. I'm the person behind 99rebels, a small web dev studio focused on building better sites for small businesses. If you've received a walkthrough video or just want to ask a question, feel free to reach out.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rebels-blue to-rebels-darkblue flex items-center justify-center mb-4 mt-6 shadow-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <a 
                      href="mailto:Rian@99rebels.com" 
                      className="text-rebels-blue hover:text-rebels-darkblue transition-colors"
                    >
                      Rian@99rebels.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rebels-blue to-rebels-darkblue flex items-center justify-center mb-4 mt-6 shadow-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Text or WhatsApp</h3>
                    <a 
                      href="tel:+353852279887" 
                      className="text-rebels-blue hover:text-rebels-darkblue transition-colors"
                    >
                      +353 85 227 9887
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rebels-blue to-rebels-darkblue flex items-center justify-center mb-4 mt-6 shadow-lg">
                      <Video className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Video Introduction</h3>
                    <p className="text-gray-600">Coming Soon</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="border-0 shadow-xl mt-12 animate-fade-in-up bg-gradient-to-r from-rebels-blue to-rebels-darkblue text-white" style={{animationDelay: "0.4s"}}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-medium mb-4">Trust Note</h3>
                  <p className="text-lg">
                    I'm a solo developer — no sales teams, no spam. Just genuine work and open communication.
                  </p>
                </CardContent>
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
