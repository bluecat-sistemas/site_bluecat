import { ArrowRight, Check, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Plano Básico",
    price: "R$ 199,90",
    period: "/mês",
    tagline: "Ideal para quem está começando",
    features: [
      "2 terminais",
      "Controle de vendas",
      "Controle de estoque",
      "Controle financeiro",
      "Cadastro de clientes e fornecedores",
      "Emissão de documentos fiscais integrada*",
      "Suporte remoto",
    ],
    cta: "Quero o Básico",
  },
  {
    name: "Plano Avançado",
    price: "R$ 379,90",
    period: "/mês",
    tagline: "Ideal para empresas em crescimento",
    featured: true,
    features: [
      "Tudo do Plano Básico",
      "Até 4 terminais",
      "Personalização visual com logo e cores da empresa",
      "Relatórios gerenciais avançados",
      "Controle operacional ampliado",
      "Suporte prioritário",
    ],
    cta: "Quero o Avançado",
  },
  {
    name: "Plano Premium",
    price: "R$ 699,90",
    period: "/mês",
    tagline: "Ideal para empresas que buscam escala e gestão completa",
    features: [
      "Tudo do Plano Avançado",
      "Até 6 terminais",
      "Implantação prioritária",
      "Treinamento dedicado",
      "Dashboards gerenciais",
      "Recursos avançados de gestão",
      "Integrações e automações disponíveis",
      "Atendimento prioritário",
    ],
    cta: "Quero o Premium",
  },
  {
    name: "Plano Enterprise",
    price: "Sob consulta",
    period: "",
    tagline: "Para empresas com necessidades específicas",
    features: [
      "Quantidade personalizada de usuários e terminais",
      "Recursos exclusivos",
      "Integrações sob demanda",
      "Desenvolvimento de funcionalidades específicas",
      "Implantação personalizada",
      "Atendimento dedicado",
    ],
    cta: "Falar sobre Enterprise",
  },
];

const setupItems = [
  "Configuração inicial do sistema",
  "Parametrização básica",
  "Treinamento inicial",
  "Suporte durante a implantação",
];

const ladder = [
  ["Básico", "Organizar o negócio"],
  ["Avançado", "Crescer com controle"],
  ["Premium", "Escalar a operação"],
  ["Enterprise", "Solução sob medida"],
];

const PricingSection = () => {
  return (
    <section id="planos" className="snap-section section-surface section-surface-alt">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="section-kicker">Planos</span>
            <h2 className="section-title mt-4">Planos do ERP BlueSys para cada fase da empresa.</h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Escolha uma estrutura mensal clara, com implantação acompanhada e
            suporte para evoluir do controle básico à gestão completa.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-lg border bg-white/84 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]",
                plan.featured
                  ? "border-blue-700 bg-blue-950 text-white shadow-[0_28px_85px_rgba(7,26,63,0.24)]"
                  : "border-slate-200 text-slate-950",
              )}
            >
              {plan.featured && (
                <div className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-sky-300 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-blue-950">
                  <Star className="h-3.5 w-3.5 fill-blue-950" />
                  Mais vendido
                </div>
              )}

              <div className="min-h-[158px]">
                <h3 className={cn("text-xl font-black", plan.featured ? "text-white" : "text-slate-950")}>
                  {plan.name}
                </h3>
                <p className={cn("mt-3 text-sm leading-6", plan.featured ? "text-white/74" : "text-slate-600")}>
                  {plan.tagline}
                </p>

                <div className="mt-6 flex flex-wrap items-end gap-1">
                  <strong className={cn("text-3xl font-black", plan.featured ? "text-white" : "text-blue-900")}>
                    {plan.price}
                  </strong>
                  {plan.period && (
                    <span className={cn("pb-1 text-sm font-bold", plan.featured ? "text-sky-200" : "text-slate-500")}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="grid grid-cols-[20px_1fr] gap-3 text-sm leading-6">
                    <span
                      className={cn(
                        "mt-1 flex h-5 w-5 items-center justify-center rounded-full",
                        plan.featured ? "bg-sky-300 text-blue-950" : "bg-sky-100 text-blue-700",
                      )}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className={plan.featured ? "text-white/86" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "secondary" : "heroOutline"}
                size="lg"
                className="group mt-7 w-full"
                asChild
              >
                <a href="#contato">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-5 text-sm leading-6 text-slate-500">
          * A emissão de documentos fiscais depende da configuração fiscal e do credenciamento do cliente.
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="rounded-lg border border-blue-200 bg-white/86 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur">
            <span className="section-kicker">Taxa de implantação</span>
            <div className="mt-4 flex flex-wrap items-end gap-2">
              <strong className="text-3xl font-black text-blue-950">R$ 800,00</strong>
              <span className="pb-1 text-sm font-bold text-slate-500">adesão</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Inclui a preparação inicial para sua empresa começar com o BlueSys configurado e acompanhado.
            </p>
            <ul className="mt-5 grid gap-3">
              {setupItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-blue-950 p-6 text-white shadow-[0_24px_70px_rgba(7,26,63,0.18)]">
            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-sky-200">
              <Sparkles className="h-4 w-4" />
              Escada de valor
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {ladder.map(([name, value], index) => (
                <div key={name} className="rounded-lg border border-white/12 bg-white/8 p-4">
                  <span className="text-xs font-black text-sky-200">0{index + 1}</span>
                  <strong className="mt-2 block text-lg">{name}</strong>
                  <p className="mt-2 text-sm leading-6 text-white/68">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
