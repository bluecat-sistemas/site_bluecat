import { Heart, Award, Users2, Rocket } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromisso",
      description: "Tratamos cada projeto com dedicação total, como se fosse nosso próprio negócio.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos a perfeição em cada entrega, superando expectativas constantemente.",
    },
    {
      icon: Users2,
      title: "Parceria",
      description: "Construímos relacionamentos duradouros baseados em confiança e transparência.",
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Estamos sempre à frente, trazendo as melhores e mais modernas soluções do mercado.",
    },
  ];

  return (
    <section id="valores" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Valores que nos <span className="hero-gradient-text">definem</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossos valores são a base de tudo o que fazemos. Eles guiam nossas
              decisões, moldam nossa cultura e definem como nos relacionamos com
              nossos clientes e parceiros.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex gap-4 items-start animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl hero-gradient p-1">
              <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-7xl font-bold hero-gradient-text mb-4">
                    100%
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Soluções
                    <br />
                    <span className="font-semibold text-foreground">
                      Personalizadas
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
