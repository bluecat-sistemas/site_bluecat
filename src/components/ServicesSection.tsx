import {
  BarChart3,
  Code2,
  Compass,
  Headphones,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import type { CSSProperties } from "react";
import proximityLogo from "@/assets/proximy-logo.png";
import erpLogo from "@/assets/erp-logo.png";

const ServicesSection = () => {
  const services = [
    {
      icon: Compass,
      title: "Estratégia digital",
      description: "Diagnóstico, posicionamento e plano de evolução para produtos e operações.",
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Sites, sistemas e interfaces com performance, responsividade e acabamento.",
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Análise de processos e desenho de soluções alinhadas ao negócio.",
    },
    {
      icon: TrendingUp,
      title: "Gestão de projetos",
      description: "Ritmo, prioridades e entregas acompanhadas do início ao lançamento.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança",
      description: "Boas práticas, compliance e proteção para operações digitais.",
    },
    {
      icon: Headphones,
      title: "Suporte dedicado",
      description: "Atendimento próximo para manter a operação estável e em evolução.",
    },
  ];

  return (
    <section id="solucoes" className="snap-section section-surface section-surface-alt">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-kicker">Soluções</span>
            <h2 className="section-title mt-4">Serviços e produtos em um ecossistema confiável.</h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            A BlueCat organiza tecnologia, gestão e suporte em uma entrega
            objetiva: entender o cenário, construir com qualidade e evoluir com
            acompanhamento próximo.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="service-tile" style={{ "--i": index } as CSSProperties}>
              <div className="service-icon">
                <service.icon className="h-5 w-5" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="product-showcase product-showcase-cool">
            <div>
              <span>Produto principal</span>
              <h3>ERP BlueSys</h3>
              <p>
                Sistema de gestão empresarial para financeiro, estoque, vendas
                e operações, criado para empresas que querem controle sem
                complicar a rotina.
              </p>
            </div>

            <div className="product-visual erp-visual">
              <img src={erpLogo} alt="ERP BlueSys" />
              <div className="mini-chart">
                <BarChart3 className="h-5 w-5" />
                <strong>+31%</strong>
              </div>
              <div className="sparkline" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </article>

          <article className="product-showcase product-showcase-warm">
            <div>
              <span>Produto em evolução</span>
              <h3>Proximy</h3>
              <p>
                App para localizações comerciais, turismo e descoberta de pontos
                relevantes com foco em movimento, mapa e comércio local.
              </p>
            </div>

            <div className="product-visual proximity-visual">
              <img src={proximityLogo} alt="Proximy" />
              <div className="route-line" />
              <div className="map-pin pin-one" />
              <div className="map-pin pin-two" />
              <div className="map-pin pin-three" />
            </div>
          </article>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-bold text-slate-600 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-blue-700" />
          Interfaces pensadas para comunicar valor com clareza.
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
