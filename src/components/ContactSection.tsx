import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bluecat.tech77@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=bluecat.tech77@gmail.com",
      external: true,
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(62) 98268-6619",
      href: "https://wa.me/5562982686619",
      external: true,
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Aparecida de Goiânia, GO - Brasil",
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="hero-gradient-text">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para ouvir você e encontrar a melhor solução para o seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Informação de Contatos */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info) =>
                  info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={info.label}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-medium">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="p-6 rounded-2xl hero-gradient">
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                Suporte Rápido 🐱
              </h4>
              <p className="text-primary-foreground/80 text-sm">
                Nossa equipe responde em até 24 horas úteis. Para urgências, chame no WhatsApp.
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-3">
            <form className="bg-card rounded-2xl p-8 card-elevated space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input placeholder="Seu nome completo" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="seu@email.com" className="h-12" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Assunto</label>
                <Input placeholder="Como podemos ajudar?" className="h-12" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem</label>
                <Textarea
                  placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                Enviar Mensagem
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
