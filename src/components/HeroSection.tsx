import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Estratégia, Design e Desenvolvimento de Elite
          </div>

          {/* Título Principal */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Soluções digitais para
            <br />
            <span className="hero-gradient-text">o seu negócio</span>
          </h1>

          {/* Legenda */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Somos especialistas em criar experiências digitais extraordinárias.
            Com suporte dedicado e soluções inovadoras, levamos seu negócio ao
            próximo nível.
          </p>

          {/* CTA Botões */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* BOTÃO COM SCROLL PARA CONTATO */}
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#contato">
                Comece Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button variant="heroOutline" size="xl" asChild>
              <a href="#servicos">
                Conheça Nossos Serviços e Produtos
              </a>
            </Button>
          </div>

          {/* Estatísticas */}
          <div
            className="grid grid-cols-3 gap-8 mt-20 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "100%", label: "Soluções Personalizadas" },
              {
                value: "3 Pilares Essenciais",
                label: "Estratégia • Design • Tecnologia",
              },
              { value: "24/7", label: "Compromisso com o Cliente" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold hero-gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#servicos"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll para serviços"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
