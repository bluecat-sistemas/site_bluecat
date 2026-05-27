import type { CSSProperties } from "react";
import { Award, HeartHandshake, Rocket, Sparkles } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: HeartHandshake,
      title: "Parceria real",
      description: "A BlueCat trabalha perto, pergunta melhor e sustenta a evolução depois da entrega.",
    },
    {
      icon: Award,
      title: "Acabamento",
      description: "Design, texto, comportamento e performance recebem a mesma atenção.",
    },
    {
      icon: Rocket,
      title: "Evolução contínua",
      description: "Cada produto nasce com espaço para crescer, medir e melhorar.",
    },
  ];

  return (
    <section id="metodo" className="snap-section section-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:py-28">
        <div>
          <span className="section-kicker">Método</span>
          <h2 className="section-title mt-4">Um processo direto para transformar necessidade em solução.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Do diagnóstico ao suporte, cada etapa é pensada para reduzir ruído,
            dar previsibilidade ao projeto e entregar tecnologia alinhada ao
            negócio.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="value-card" style={{ "--i": index } as CSSProperties}>
                <value.icon className="h-5 w-5" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="process-board">
          {[
            ["01", "Diagnóstico", "entender contexto, público e meta"],
            ["02", "Design", "interface, identidade e experiência"],
            ["03", "Construção", "código, performance e responsividade"],
            ["04", "Suporte", "evolução contínua após o lançamento"],
          ].map(([number, title, text], index) => (
            <div key={number} className="process-step" style={{ "--i": index } as CSSProperties}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}

          <div className="process-core">
            <Sparkles className="h-8 w-8" />
            <strong>BlueCat</strong>
            <span>produto, suporte e tecnologia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
