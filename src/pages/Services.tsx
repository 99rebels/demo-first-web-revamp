import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Bot, Wrench, CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-[50vh] flex items-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent leading-normal pb-1">
                What We Do For Law Firms
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Comprehensive web solutions tailored for modern legal practices.
              </p>
            </div>
          </div>
        </section>

        {/* Law Firm Website Redesign */}
        <section className="py-20 md:py-28 bg-rebels-navy relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-rebels-gold/5 animate-float"></div>
            <div className="absolute bottom-20 left-[5%] w-48 h-48 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-rebels-navy flex items-center justify-center ring-2 ring-rebels-gold/60">
                  <Globe className="text-rebels-gold" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Law Firm Website Redesign</h2>
              </div>

              <p className="text-xl text-gray-300 mb-8">
                We turn outdated, confusing, or unprofessional websites into clean, modern, trustworthy online presences.
              </p>

              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">What's included:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Modern, professional visual design",
                      "Clear, structured practice area pages",
                      "Strong calls-to-action",
                      "Mobile-first build",
                      "Fast, secure performance",
                      "Clear navigation & user experience"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-rebels-gold flex-shrink-0" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-lg text-gray-600 italic">
                    Our focus isn't "flashy design". It's credibility, clarity and conversion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Client Intake */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-rebels-navy flex items-center justify-center ring-2 ring-rebels-gold/60">
                  <Bot className="text-rebels-gold" size={28} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">AI Client Intake</h2>
                  <span className="text-rebels-gold font-medium">Optional</span>
                </div>
              </div>

              <p className="text-xl text-gray-700 mb-8">
                We can add a simple, safe AI assistant to enhance your client experience.
              </p>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Answer common questions",
                      "Help route enquiries",
                      "Collect relevant client details",
                      "Reduce repetitive admin work"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-rebels-gold flex-shrink-0" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-rebels-gold/10 border border-rebels-gold/20 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Important:</strong> This does not replace legal expertise. It simply improves responsiveness and client experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support & Maintenance */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-rebels-navy flex items-center justify-center ring-2 ring-rebels-gold/60">
                  <Wrench className="text-rebels-gold" size={28} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Support & Maintenance</h2>
                  <span className="text-rebels-gold font-medium">Optional</span>
                </div>
              </div>

              <p className="text-xl text-gray-700 mb-8">
                Flexible ongoing support without unnecessary complexity.
              </p>

              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      "Keep your site updated",
                      "Help with small content edits",
                      "Assist with future improvements"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="text-rebels-gold flex-shrink-0" size={20} />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-rebels-slate">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                If your current website doesn't represent your firm properly, we can fix that.
              </h2>
              <Button
                asChild
                size="lg"
                className="bg-white text-rebels-slate hover:bg-gray-100 text-lg px-8 py-6"
              >
                <a href="mailto:rian@99rebels.com">Request a Review</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
