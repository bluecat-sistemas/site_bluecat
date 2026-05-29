import { Instagram, Linkedin } from "lucide-react";
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
      <footer className="snap-section footer-stage">
        <div className="mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <img src={logoBluecat} alt="BlueCat Systems" className="h-20 w-auto brightness-0 invert" />
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
                Tecnologia de ponta, suporte próximo e experiências digitais com
                acabamento de produto. A BlueCat cria sistemas que a empresa sente
                no dia a dia e o cliente percebe no primeiro clique.
              </p>

              <div className="mt-8 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-slate-950"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-white">Empresa</h4>
                <ul className="mt-4 space-y-3 text-white/58">
                  <li><a href="#produto" className="hover:text-white">Produto</a></li>
                  <li><a href="#solucoes" className="hover:text-white">Soluções</a></li>
                  <li><a href="#planos" className="hover:text-white">Planos</a></li>
                  <li><a href="#metodo" className="hover:text-white">Método</a></li>
                  <li><a href="#contato" className="hover:text-white">Contato</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white">Legal</h4>
                <ul className="mt-4 space-y-3 text-white/58">
                  <li>
                    <button onClick={() => setOpenModal("privacy")} className="hover:text-white">
                      Privacidade
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setOpenModal("terms")} className="hover:text-white">
                      Termos de uso
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setOpenModal("cookies")} className="hover:text-white">
                      Cookies
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
            <p>© {currentYear} BlueCat Systems. Todos os direitos reservados.</p>
            <p>Aparecida de Goiânia, Brasil</p>
          </div>
        </div>
      </footer>

      <LegalModal
        open={openModal === "privacy"}
        title="Política de Privacidade"
        onClose={() => setOpenModal(null)}
      >
        <p>
          A BlueCat Systems respeita a sua privacidade. Todas as informações
          fornecidas por nossos clientes são utilizadas exclusivamente para
          comunicação, suporte e melhoria de nossos serviços.
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
          Ao utilizar nossos serviços, você concorda com os termos descritos neste
          documento. A BlueCat Systems se reserva o direito de atualizar, modificar
          ou encerrar serviços a qualquer momento.
        </p>
        <p>O uso indevido de nossos sistemas, marcas ou conteúdos é proibido.</p>
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
        <p>Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme esta política.</p>
      </LegalModal>
    </>
  );
};

export default Footer;
