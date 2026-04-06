import { motion } from "framer-motion";
import { ShoppingBag, Gift } from "lucide-react";

const CommercialSection = () => {
  return (
    <section id="encomendas" className="section-padding bg-background">
      <div className="container-villa">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Almoço */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <ShoppingBag className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Quer almoçar hoje?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Confira nosso cardápio do dia com opções de marmitas, assados, massas e saladas. 
              Pedido rápido e entrega ágil em Rio Preto.
            </p>
            <a
              href="https://cardapio.villarotisseria.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-villa inline-flex items-center gap-2"
              data-gtm="cta-almoco"
            >
              <ShoppingBag className="w-5 h-5" />
              Ver Cardápio
            </a>
          </motion.div>

          {/* Encomendas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Gift className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Quer fazer uma encomenda?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Festas, eventos ou refeições especiais? Encomende assados, marmitas e muito mais 
              com antecedência pelo WhatsApp.
            </p>
            <a
              href="https://wa.me/5517992091750?text=Ol%C3%A1!%20Quero%20fazer%20uma%20encomenda%20na%20Villa%20Rotisseria."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2"
              data-gtm="cta-encomenda"
            >
              <Gift className="w-5 h-5" />
              Fazer Encomenda
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
