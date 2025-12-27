import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-[50vh] flex items-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent leading-normal pb-1">
                Why 99rebels
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                Why law firms choose us for their website needs.
              </p>
            </div>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
