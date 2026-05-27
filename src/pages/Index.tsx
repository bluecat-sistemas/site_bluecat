import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="site-shell min-h-screen">
      <Header />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
