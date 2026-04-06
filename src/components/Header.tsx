import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#categorias" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-villa flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Villa Rotisseria" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://cardapio.villarotisseria.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-villa text-sm py-2.5 px-6"
            data-gtm="cta-peca-agora-header"
          >
            Peça Agora
          </a>
          <a
            href="https://wa.me/5517992091750?text=Ol%C3%A1!%20Quero%20fazer%20uma%20encomenda%20na%20Villa%20Rotisseria."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2.5 px-6 flex items-center gap-2"
            data-gtm="cta-whatsapp-header"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <a
                  href="https://cardapio.villarotisseria.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-villa text-center text-sm py-3"
                  data-gtm="cta-peca-agora-mobile"
                >
                  Peça Agora
                </a>
                <a
                  href="https://wa.me/5517992091750?text=Ol%C3%A1!%20Quero%20fazer%20uma%20encomenda%20na%20Villa%20Rotisseria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-center text-sm py-3"
                  data-gtm="cta-whatsapp-mobile"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
