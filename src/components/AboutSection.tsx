import { Target, Eye, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const items = [
    {
      icon: Target,
      title: "Nossa Missão",
      description:
        "Entregar soluções tecnológicas ágeis e eficientes, proporcionando suporte excepcional e resultados mensuráveis para nossos parceiros.",
    },
    {
      icon: Eye,
      title: "Nossa Visão",
      description:
        "Ser referência nacional em tecnologia e suporte, reconhecidos pela excelência, inovação e compromisso com o sucesso de nossos clientes.",
    },
    {
      icon: Lightbulb,
      title: "Nosso Propósito",
      description:
        "Acreditamos que toda empresa merece tecnologia. Nosso papel é simplificar o complexo e entregar soluções que funcionam.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem é a <span className="hero-gradient-text">Bluecat Systems</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma empresa focada em ajudar empresas a alcançarem seus objetivos
            através de soluções tecnológicas e suporte dedicado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 card-elevated animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
