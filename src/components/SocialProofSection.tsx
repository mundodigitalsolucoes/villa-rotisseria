import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara S.",
    text: "Melhor rotisseria de Rio Preto! O frango assado é incrível e a marmita fitness é perfeita pro meu dia a dia.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo M.",
    text: "Sempre peço pelo CardápioWeb, é super prático. A comida chega quentinha e com sabor caseiro de verdade.",
    rating: 5,
  },
  {
    name: "Ana Paula R.",
    text: "Encomendei para o aniversário da minha mãe e foi um sucesso! Tudo muito saboroso e bem apresentado.",
    rating: 5,
  },
  {
    name: "Roberto F.",
    text: "Atendimento excelente pelo WhatsApp. Rápidos, educados e a comida é sempre impecável. Super recomendo!",
    rating: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-villa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes <span className="text-primary">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A confiança de quem já experimentou o sabor da Villa Rotisseria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-semibold text-sm text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
