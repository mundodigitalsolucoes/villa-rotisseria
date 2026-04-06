import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Frango assado dourado e suculento da Villa Rotisseria"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
      </div>

      <div className="relative z-10 container-villa px-4 py-32 md:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={logo}
              alt="Villa Rotisseria"
              className="h-24 md:h-32 w-auto mb-8"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "hsl(var(--warm-white))" }}
          >
            Sabor de verdade,{" "}
            <span style={{ color: "hsl(var(--accent))" }}>direto pra sua mesa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
            style={{ color: "hsl(var(--warm-white) / 0.85)" }}
          >
            Assados, marmitas, massas e saladas feitos com carinho em São José do Rio Preto. 
            Peça online ou faça sua encomenda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://cardapio.villarotisseria.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-villa flex items-center justify-center gap-2 text-base"
              data-gtm="cta-peca-agora-hero"
            >
              <ShoppingBag className="w-5 h-5" />
              Peça Agora
            </a>
            <a
              href="https://wa.me/5517992091750?text=Ol%C3%A1!%20Quero%20fazer%20uma%20encomenda%20na%20Villa%20Rotisseria."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2 text-base"
              data-gtm="cta-encomenda-hero"
            >
              <MessageCircle className="w-5 h-5" />
              Faça sua Encomenda
            </a>
            <a
              href="https://wa.me/5517992091750?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20na%20Villa%20Rotisseria."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-villa flex items-center justify-center gap-2 text-base border-warm-white/30 text-warm-white hover:bg-warm-white/10 hover:text-warm-white"
              style={{ borderColor: "hsl(var(--warm-white) / 0.3)", color: "hsl(var(--warm-white))" }}
              data-gtm="cta-whatsapp-hero"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
