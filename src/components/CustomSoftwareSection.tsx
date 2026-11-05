import { ArrowRight, Blocks, Code2, Sparkles, Workflow } from "lucide-react";
import { Button } from "./ui/button";

const possibilities = [
  { icon: Code2, label: "Sistemas web para a rotina da sua empresa" },
  { icon: Workflow, label: "Automação de tarefas e processos" },
  { icon: Blocks, label: "Integrações entre ferramentas e dados" },
];

const CustomSoftwareSection = () => (
  <section id="software-sob-medida" className="snap-section section-surface">
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="section-kicker">Desenvolvimento sob encomenda</span>
          <h2 className="section-title mt-4">
            Seu negócio é único. O software também pode ser.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Precisa de um sistema que se encaixe no seu jeito de trabalhar? A BlueCat transforma processos,
            ideias e desafios em soluções digitais feitas para a sua empresa.
          </p>

          <ul className="mt-8 grid gap-4">
            {possibilities.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-semibold text-slate-700 sm:text-base">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-blue-800">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <Button variant="hero" size="xl" className="group mt-9" asChild>
            <a href="#contato">
              Vamos desenhar sua solução
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-blue-950 p-7 text-white shadow-[0_32px_90px_rgba(7,26,63,0.22)] sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300 text-blue-950">
              <Sparkles className="h-7 w-7" />
            </div>
            <p className="mt-10 text-sm font-black uppercase tracking-[0.16em] text-sky-200">
              Do desafio à solução
            </p>
            <h3 className="mt-3 max-w-md text-3xl font-black leading-tight sm:text-4xl">
              Você traz a necessidade. A gente constrói o caminho.
            </h3>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Entendemos sua operação"],
                ["02", "Desenhamos a solução"],
                ["03", "Desenvolvemos e evoluímos"],
              ].map(([number, step]) => (
                <div key={number} className="rounded-xl border border-white/15 bg-white/8 p-4">
                  <span className="text-xs font-black text-sky-200">{number}</span>
                  <p className="mt-2 text-sm font-bold leading-5 text-white/90">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-white/65">
              Cada projeto começa com uma conversa para entender o que faz sentido para o seu negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CustomSoftwareSection;
