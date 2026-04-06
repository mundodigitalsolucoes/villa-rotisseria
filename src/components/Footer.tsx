import { Instagram, Facebook, MapPin, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-charcoal section-padding pb-8">
      <div className="container-villa">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Villa Rotisseria" className="h-16 w-auto mb-4" loading="lazy" />
            <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--warm-white) / 0.7)" }}>
              Assados, marmitas, massas e saladas com sabor caseiro em São José do Rio Preto.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4" style={{ color: "hsl(var(--warm-white))" }}>
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Cardápio", href: "#categorias" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Encomendas", href: "#encomendas" },
                { label: "Localização", href: "#localizacao" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm hover:text-primary transition-colors"
                  style={{ color: "hsl(var(--warm-white) / 0.7)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4" style={{ color: "hsl(var(--warm-white))" }}>
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5517992091750"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-whatsapp font-semibold"
              >
                (17) 99209-1750
              </a>
              <a
                href="https://cardapio.villarotisseria.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1"
                style={{ color: "hsl(var(--warm-white) / 0.7)" }}
              >
                <ExternalLink className="w-3 h-3" />
                CardápioWeb
              </a>
              <a
                href="https://maps.app.goo.gl/g5BEWhamd8UiAZw9A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1"
                style={{ color: "hsl(var(--warm-white) / 0.7)" }}
              >
                <MapPin className="w-3 h-3" />
                São José do Rio Preto - SP
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4" style={{ color: "hsl(var(--warm-white))" }}>
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/villarotisseria_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram da Villa Rotisseria"
                data-gtm="social-instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: "hsl(var(--warm-white))" }} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100050220138407"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook da Villa Rotisseria"
                data-gtm="social-facebook"
              >
                <Facebook className="w-5 h-5" style={{ color: "hsl(var(--warm-white))" }} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-6" style={{ borderColor: "hsl(var(--warm-white) / 0.1)" }}>
          <p className="text-center text-xs" style={{ color: "hsl(var(--warm-white) / 0.5)" }}>
            © {new Date().getFullYear()} Villa Rotisseria. Todos os direitos reservados. São José do Rio Preto - SP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
