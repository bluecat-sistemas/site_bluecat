import type { FormEvent } from "react";
import { useState } from "react";
import { Loader2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/sonner";
import { Textarea } from "./ui/textarea";

const CONTACT_EMAIL = "bluecat.tech77@gmail.com";
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL;
const CONTACT_FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT || `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const PLAN_OPTIONS = ["Básico", "Avançado", "Premium", "Enterprise"];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: CONTACT_EMAIL,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`,
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      plan: String(formData.get("plan") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      targetEmail: CONTACT_EMAIL,
      source: "bluecat-site-contact-form",
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.plan || !payload.message) {
      toast.error("Preencha todos os campos antes de enviar.");
      return;
    }

    setIsSubmitting(true);

    try {
      const endpoint = N8N_WEBHOOK_URL || CONTACT_FORM_ENDPOINT;
      const isN8nEndpoint = Boolean(N8N_WEBHOOK_URL);
      const body = isN8nEndpoint
        ? payload
        : {
            Nome: payload.name,
            Email: payload.email,
            Assunto: payload.subject,
            Plano: payload.plan,
            Mensagem: payload.message,
            Página: payload.pageUrl,
            Data: payload.submittedAt,
            _subject: `Novo contato do site (${payload.plan}): ${payload.subject}`,
            _template: "table",
            _captcha: "false",
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`contact endpoint returned ${response.status}`);
      }

      form.reset();
      toast.success("Mensagem enviada para a BlueCat.", {
        description: "Recebemos seu contato e vamos responder em breve.",
      });
    } catch {
      toast.error("Não foi possível enviar a mensagem.", {
        description: "Tente novamente ou chame a BlueCat pelo WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="snap-section contact-stage">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <div>
          <span className="section-kicker">Contato</span>
          <h2 className="section-title mt-4">Vamos entender o que sua empresa precisa?</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Conte o que sua empresa precisa. A BlueCat pode transformar o ponto
            de partida em um produto digital mais bonito, claro e eficiente.
          </p>

          <div className="mt-8 grid gap-3">
            {contactInfo.map((info) =>
              info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.external ? "_blank" : undefined}
                  rel={info.external ? "noopener noreferrer" : undefined}
                  className="contact-link"
                >
                  <info.icon className="h-5 w-5" />
                  <div>
                    <span>{info.label}</span>
                    <strong>{info.value}</strong>
                  </div>
                </a>
              ) : (
                <div key={info.label} className="contact-link">
                  <info.icon className="h-5 w-5" />
                  <div>
                    <span>{info.label}</span>
                    <strong>{info.value}</strong>
                  </div>
                </div>
              ),
            )}
          </div>

          <a
            href="https://wa.me/5562982686619"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-panel mt-6"
          >
            <MessageCircle className="h-5 w-5" />
            <div>
              <strong>Suporte rápido</strong>
              <span>Respostas em até 24 horas úteis.</span>
            </div>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span>Nome</span>
              <Input name="name" placeholder="Seu nome completo" className="h-12" required />
            </label>
            <label>
              <span>Email</span>
              <Input name="email" type="email" placeholder="seu@email.com" className="h-12" required />
            </label>
          </div>

          <label>
            <span>Assunto</span>
            <Input name="subject" placeholder="Como podemos ajudar?" className="h-12" required />
          </label>

          <label>
            <span>Plano de interesse</span>
            <select
              name="plan"
              className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecione um plano
              </option>
              {PLAN_OPTIONS.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Mensagem</span>
            <Textarea
              name="message"
              placeholder="Conte um pouco sobre o projeto, sistema ou necessidade..."
              className="min-h-[150px] resize-none"
              required
            />
          </label>

          <Button variant="hero" size="lg" className="w-full group" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
