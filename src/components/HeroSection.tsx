import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import logoBluecat from "@/assets/logo-bluecat.png";
import proximityLogo from "@/assets/proximy-logo.png";
import erpLogo from "@/assets/erp-logo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="snap-section hero-stage pt-28">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:pb-10">
        <div className="hero-copy relative z-10 max-w-3xl min-w-0">
          <div className="reveal-chip mb-6 inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>BlueCat Technology Solutions</span>
          </div>

          <h1 className="max-w-4xl text-[2.08rem] font-black leading-[1.02] text-slate-950 sm:text-5xl sm:leading-[0.96] lg:text-6xl">
            <span className="block">BlueCat Systems</span>
            <span className="hidden sm:block">tecnologia sob medida</span>
            <span className="hidden sm:block">para empresas.</span>
            <span className="block sm:hidden">tecnologia sob</span>
            <span className="block sm:hidden">medida para</span>
            <span className="block sm:hidden">empresas.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8">
            Criamos sistemas, produtos digitais e sites institucionais com
            estratégia, design consistente e suporte próximo para sustentar a
            evolução do seu negócio.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="#produto">
                Conhecer soluções
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contato">Falar com especialista</a>
            </Button>
          </div>

          <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              ["24/7", "suporte dedicado"],
              ["100%", "soluções sob medida"],
              ["3", "pilares: estratégia, design e tecnologia"],
            ].map(([value, label]) => (
              <div key={label} className="metric-tile">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[500px] lg:min-h-[650px]">
          <div className="product-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
          </div>

          <div className="hero-device">
            <div className="device-topbar">
              <span />
              <span />
              <span />
              <div className="ml-auto rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-blue-800">
                online
              </div>
            </div>

            <div className="device-body">
              <div className="brand-screen">
                <img src={logoBluecat} alt="BlueCat Systems" className="h-auto w-full" />
              </div>

              <div className="dashboard-grid">
                <div className="dashboard-panel panel-primary">
                  <div className="flex items-center justify-between">
                    <span>Fluxo digital</span>
                    <Zap className="h-4 w-4" />
                  </div>
                  <strong>+42%</strong>
                  <div className="progress-track">
                    <span style={{ width: "74%" }} />
                  </div>
                </div>

                <div className="dashboard-panel">
                  <span>Atendimento</span>
                  <strong>1.8s</strong>
                  <small>tempo médio</small>
                </div>

                <div className="dashboard-panel">
                  <span>Projetos</span>
                  <strong>12</strong>
                  <small>em acompanhamento</small>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-product floating-product-left">
            <img src={erpLogo} alt="ERP BlueSys" />
            <div>
              <strong>ERP BlueSys</strong>
              <span>Gestão inteligente</span>
            </div>
          </div>

          <div className="floating-product floating-product-right">
            <img src={proximityLogo} alt="Proximy" />
            <div>
              <strong>Proximy</strong>
              <span>Descoberta local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
