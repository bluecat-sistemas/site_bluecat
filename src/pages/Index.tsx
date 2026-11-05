import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CustomSoftwareSection from "@/components/CustomSoftwareSection";
import BlueSysSection from "@/components/BlueSysSection";
import ValuesSection from "@/components/ValuesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const scrollToCurrentHash = () => {
      const sectionId = window.location.hash.slice(1);

      if (!sectionId) {
        return;
      }

      window.setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const headerOffset = 96;
        const targetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({ top: Math.max(targetTop, 0), behavior: "auto" });
      }, 120);
    };

    scrollToCurrentHash();
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => window.removeEventListener("hashchange", scrollToCurrentHash);
  }, []);

  return (
    <div className="site-shell min-h-screen" data-deploy-version="2026-05-29-plans">
      <Header />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CustomSoftwareSection />
        <BlueSysSection />
        <ValuesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
