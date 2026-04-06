import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";

const CardapioWebSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-villa text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Peça de forma rápida e prática
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Acesse nosso CardápioWeb, escolha seus pratos favoritos e finalize seu pedido em poucos cliques. 
            Simples, rápido e sem complicação.
          </p>
          <a
            href="https://cardapio.villarotisseria.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold rounded-xl px-10 py-4 text-lg transition-all duration-300 hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
            data-gtm="cta-cardapioweb"
          >
            <ExternalLink className="w-5 h-5" />
            Acessar CardápioWeb
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CardapioWebSection;
