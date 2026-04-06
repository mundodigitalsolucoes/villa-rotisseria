import { motion } from "framer-motion";
import { ChefHat, Heart, Clock, Smartphone, Truck, Star } from "lucide-react";

const items = [
  { icon: ChefHat, title: "Comida de Verdade", desc: "Ingredientes frescos e selecionados todos os dias." },
  { icon: Heart, title: "Sabor Caseiro", desc: "Receitas tradicionais com tempero que lembra o de casa." },
  { icon: Clock, title: "Praticidade", desc: "Almoço pronto ou encomendas para qualquer ocasião." },
  { icon: Truck, title: "Delivery Rápido", desc: "Entregamos com agilidade em São José do Rio Preto." },
  { icon: Smartphone, title: "Pedido Fácil", desc: "Peça pelo celular em poucos toques no CardápioWeb." },
  { icon: Star, title: "Qualidade Garantida", desc: "Avaliações positivas e clientes satisfeitos sempre." },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-secondary">
      <div className="container-villa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-primary">Villa?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tradição, sabor e praticidade em cada refeição.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
