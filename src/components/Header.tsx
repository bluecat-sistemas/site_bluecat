import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const WHATSAPP_LINK = "https://wa.me/5562982686619";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#produto", label: "Produto" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#planos", label: "Planos" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncActiveSectionFromHash = () => {
      const sectionId = window.location.hash.slice(1);

      if (sectionId) {
        setActiveSection(sectionId);
      }
    };

    syncActiveSectionFromHash();
    window.addEventListener("hashchange", syncActiveSectionFromHash);

    return () => window.removeEventListener("hashchange", syncActiveSectionFromHash);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.35, 0.55, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={cn(
            "flex h-16 items-center justify-between rounded-xl border px-3 transition-all duration-500 sm:px-5",
            isScrolled
              ? "border-slate-200/80 bg-white/88 shadow-[0_16px_45px_rgba(10,31,68,0.10)] backdrop-blur-2xl"
              : "border-white/55 bg-white/64 backdrop-blur-xl",
          )}
        >
          <a href="#inicio" aria-label="BlueCat Systems" onClick={closeMobileMenu}>
            <Logo />
          </a>

          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b-2 px-1 py-2 text-sm font-semibold transition-colors duration-300",
                    isActive && "border-blue-700 text-slate-950",
                    !isActive && "border-transparent text-slate-500 hover:text-slate-950",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="hero" size="default" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Fale conosco
              </a>
            </Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm md:hidden"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="mt-3 overflow-hidden rounded-xl border border-white/70 bg-white/92 p-3 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl md:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}

              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
