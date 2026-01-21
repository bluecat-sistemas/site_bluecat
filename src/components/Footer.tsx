import { Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import logoBluecat from "@/assets/logo-bluecat.png";
import LegalModal from "./LegalModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openModal, setOpenModal] = useState<null | "privacy" | "terms" | "cookies">(null);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bluecat-systems-51309a3a7/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/bluecat_systems/",
      label: "Instagram",
    },
  ];

  return (
    <>
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Marca */}
            <div className="md:col-span-2">
              <img
                src={logoBluecat}
                alt="Bluecat Logo"
                className="h-14 w-auto brightness-0 invert mb-4"
              />

              <p className="text-background/60 max-w-md mb-6">
                Uma empresa comprometida com tecnologia de ponta, inovação e suporte
                de alto nível. Sua parceira para soluções digitais eficientes e seguras.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="#sobre" className="text-background/60 hover:text-background">Sobre Nós</a></li>
                <li><a href="#servicos" className="text-background/60 hover:text-background">Serviços</a></li>
                <li><a href="#valores" className="text-background/60 hover:text-background">Valores</a></li>
                <li><a href="#contato" className="text-background/60 hover:text-background">Contato</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setOpenModal("privacy")}
                    className="text-background/60 hover:text-background"
                  >
                    Privacidade
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenModal("terms")}
                    className="text-background/60 hover:text-background"
                  >
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setOpenModal("cookies")}
                    className="text-background/60 hover:text-background"
                  >
                    Cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Rodapé inferior */}
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/40 text-sm">
              © {currentYear} BlueCat Systems. Todos os direitos reservados.
            </p>
            <p className="text-background/40 text-sm">
              Feito com 🐱 em Aparecida de Goiânia, Brasil
            </p>
          </div>
        </div>
      </footer>

      {/* MODAIS */}
      <LegalModal
        open={openModal === "privacy"}
        title="Política de Privacidade"
        onClose={() => setOpenModal(null)}
      >
        <p>
          A BlueCat Systems respeita a sua privacidade. Todas as informações
          fornecidas por nossos clientes são utilizadas exclusivamente para fins
          de comunicação, suporte e melhoria de nossos serviços.
        </p>
        <p>
          Não compartilhamos, vendemos ou divulgamos dados pessoais a terceiros,
          exceto quando exigido por lei.
        </p>
      </LegalModal>

      <LegalModal
        open={openModal === "terms"}
        title="Termos de Uso"
        onClose={() => setOpenModal(null)}
      >
        <p>
          Ao utilizar nossos serviços, você concorda com os termos descritos
          neste documento. A BlueCat Systems se reserva o direito de atualizar,
          modificar ou encerrar serviços a qualquer momento.
        </p>
        <p>
          O uso indevido de nossos sistemas, marcas ou conteúdos é proibido.
        </p>
      </LegalModal>

      <LegalModal
        open={openModal === "cookies"}
        title="Política de Cookies"
        onClose={() => setOpenModal(null)}
      >
        <p>
          Utilizamos cookies para melhorar a experiência do usuário, analisar
          métricas de acesso e otimizar nossos serviços.
        </p>
        <p>
          Ao continuar navegando em nosso site, você concorda com o uso de
          cookies conforme esta política.
        </p>
      </LegalModal>
    </>
  );
};

export default Footer;
