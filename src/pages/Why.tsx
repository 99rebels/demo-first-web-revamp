
import WhySection from "@/components/WhySection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Why = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="mb-8 bg-gradient-to-r from-rebels-blue to-rebels-darkblue bg-clip-text text-transparent">
                Why I Do This
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12">
                The philosophy and purpose behind my approach to web development.
              </p>
            </div>
          </div>
        </section>
        <WhySection />
      </main>
      <Footer />
    </div>
  );
};

export default Why;
