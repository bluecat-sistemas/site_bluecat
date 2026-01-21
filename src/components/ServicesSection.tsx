import {
  Users,
  TrendingUp,
  Shield,
  Headphones,
  BarChart3,
  Zap,
} from "lucide-react";

import proximityLogo from "@/assets/proximy-logo.png";
import erpLogo from "@/assets/erp-logo.png";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Consultoria Empresarial",
      description:
        "Análise estratégica completa para identificar oportunidades de crescimento e otimização de processos.",
    },
    {
      icon: TrendingUp,
      title: "Gestão de Projetos",
      description:
        "Acompanhamento especializado do início ao fim, garantindo entregas no prazo e dentro do orçamento.",
    },
    {
      icon: Shield,
      title: "Compliance & Segurança",
      description:
        "Adequação às normas regulatórias e implementação de políticas de segurança corporativa.",
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description:
        "Atendimento personalizado com equipe especializada pronta para resolver qualquer demanda.",
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description:
        "Transformamos dados em insights estratégicos para tomadas de decisão mais assertivas.",
    },
    {
      icon: Zap,
      title: "Transformação Digital",
      description:
        "Modernização de processos e implementação de tecnologias que impulsionam a eficiência.",
    },
  ];

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        {/* Serviços */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="hero-gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções completas e personalizadas para cada desafio do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 card-elevated animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Produtos */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="hero-gradient-text">Produtos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções desenvolvidas pela BlueCat para impulsionar a gestão e o relacionamento com seus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Proximy */}
          <div className="bg-card rounded-2xl p-8 border border-border card-elevated hover:border-primary/20 transition-colors text-center">
            <img
              src={proximityLogo}
              alt="Proximy"
              className="h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Proximy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aplicativo de Localizações Comerciais, desenvolvida para
              facilitar as viagens a novos destinos, aumentar o conhecimento do turismo e apoiar comercio local.
            </p>
          </div>

          {/* ERP */}
          <div className="bg-card rounded-2xl p-8 border border-border card-elevated hover:border-primary/20 transition-colors text-center">
            <img
              src={erpLogo}
              alt="ERP BlueCat"
              className="h-16 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">ERP BlueCat</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sistema de gestão empresarial completo para controle financeiro,
              estoque, vendas e operações, ideal para pequenas e médias empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
