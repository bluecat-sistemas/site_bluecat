import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  "Controle de vendas, estoque e financeiro",
  "Cadastro de clientes e fornecedores",
  "Emissão integrada de documentos fiscais*",
  "Controle operacional ampliado",
  "Relatórios gerenciais avançados e dashboards",
  "Personalização visual com logo e cores da empresa",
  "Recursos avançados de gestão",
  "Integrações e automações",
  "Recursos exclusivos e desenvolvimento sob medida",
  "Configuração inicial e parametrização do sistema",
  "Implantação personalizada e prioritária, com acompanhamento",
  "Treinamento dedicado para a equipe",
  "Suporte remoto prioritário e atendimento dedicado",
];

const BlueSysSection = () => (
  <section id="bluesys" className="snap-section section-surface section-surface-alt">
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-28">
      <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="section-kicker">ERP BlueSys</span>
          <h2 className="section-title mt-4">Recursos completos para organizar e expandir sua operação.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
          Reunimos as funcionalidades dos planos em uma única solução. A configuração é definida conforme a
          necessidade da sua empresa.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="flex flex-col justify-between rounded-lg bg-blue-950 p-7 text-white shadow-[0_24px_70px_rgba(7,26,63,0.2)]">
          <div>
            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-sky-200">
              <Sparkles className="h-4 w-4" />
              Estrutura flexível
            </div>
            <p className="mt-8 text-sm font-bold text-white/70">Configuração padrão</p>
            <p className="mt-2 text-4xl font-black">2 a 6 terminais</p>
            <p className="mt-4 max-w-sm leading-7 text-white/75">
              Outras quantidades e necessidades específicas podem ser avaliadas sob consulta.
            </p>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="text-sm font-bold text-sky-200">Licença e implantação</p>
            <p className="mt-1 text-2xl font-black">Sob consulta</p>
            <Button variant="secondary" size="lg" className="group mt-6 w-full" asChild>
              <a href="#contato">
                Solicitar uma proposta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </aside>

        <article className="rounded-lg border border-slate-200 bg-white/86 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <h3 className="text-xl font-black text-slate-950">Funcionalidades incluídas</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="grid grid-cols-[20px_1fr] gap-3 text-sm leading-6 text-slate-600">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-blue-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
            * A emissão fiscal depende da configuração e do credenciamento da empresa.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default BlueSysSection;
