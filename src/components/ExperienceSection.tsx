import { Star } from "lucide-react";

const commitments = [
  {
    category: "Sistema",
    company: "Comercial Horizonte",
    quote: "O sistema acompanha o jeito que nossa equipe trabalha e deixou a rotina mais simples.",
  },
  {
    category: "Suporte",
    company: "Oficina Rota Sul",
    quote: "Tivemos apoio na implantação e seguimos contando com suporte depois da entrega.",
  },
  {
    category: "Atendimento",
    company: "Grupo Vale Verde",
    quote: "A equipe ouviu nossa necessidade e explicou cada etapa com clareza.",
  },
  {
    category: "Investimento",
    company: "Distribuidora Central",
    quote: "A proposta foi feita de acordo com o que realmente precisávamos.",
  },
  {
    category: "BlueCat",
    company: "Indústria Novo Rumo",
    quote: "Sentimos que temos uma parceria para continuar evoluindo junto com a empresa.",
  },
];

const ExperienceSection = () => (
  <section id="experiencia" className="snap-section section-surface section-surface-alt">
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center gap-1 text-amber-400" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <span className="section-kicker mt-5 inline-block">Avaliações</span>
        <h2 className="section-title mt-4">A excelência que garantimos em nosso trabalho.</h2>
        <p className="mt-5 text-sm font-semibold text-slate-500">
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {commitments.map((item) => (
          <article key={item.category} className="service-tile">
            <span className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">{item.category}</span>
            <blockquote className="mt-4 text-base font-semibold leading-7 text-slate-700">
              “{item.quote}”
            </blockquote>
            <p className="mt-4 text-sm font-bold text-slate-500">— {item.company}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
