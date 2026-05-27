import type { CSSProperties } from "react";
import { Eye, Layers3, Target } from "lucide-react";

const AboutSection = () => {
  const items = [
    {
      icon: Target,
      eyebrow: "Missão",
      title: "Tirar a tecnologia do campo das promessas.",
      description:
        "Projetamos soluções claras, rápidas e bem acompanhadas para empresas que precisam de resultado sem perder identidade.",
    },
    {
      icon: Eye,
      eyebrow: "Visão",
      title: "Ser a parceira digital que o cliente sente por perto.",
      description:
        "Unimos produto, suporte e decisão técnica para criar uma presença moderna, confiável e pronta para escalar.",
    },
    {
      icon: Layers3,
      eyebrow: "Propósito",
      title: "Construir ferramentas que parecem simples porque foram bem pensadas.",
      description:
        "Da primeira conversa ao painel final, cuidamos da experiência, da performance e do jeito como a marca se apresenta.",
    },
  ];

  return (
    <section id="produto" className="snap-section section-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <span className="section-kicker">Produto BlueCat</span>
          <h2 className="section-title mt-4">
            Tecnologia com clareza, consistência e suporte de verdade.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A BlueCat combina estratégia, desenvolvimento e acompanhamento
            técnico para entregar soluções digitais que funcionam na rotina da
            empresa e comunicam confiança desde o primeiro contato.
          </p>
        </div>

        <div className="experience-stack">
          {items.map((item, index) => (
            <article key={item.title} className="experience-card" style={{ "--i": index } as CSSProperties}>
              <div className="experience-icon">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
