import { motion } from "framer-motion";
import catAssados from "@/assets/cat-assados.jpg";
import catMarmitas from "@/assets/cat-marmitas.jpg";
import catFitness from "@/assets/cat-fitness.jpg";
import catMassas from "@/assets/cat-massas.jpg";
import catSaladas from "@/assets/cat-saladas.jpg";

const categories = [
  {
    title: "Assados",
    description: "Frangos e carnes assadas com tempero caseiro irresistível.",
    image: catAssados,
    alt: "Frango assado dourado da Villa Rotisseria em São José do Rio Preto",
  },
  {
    title: "Marmitas",
    description: "Refeições completas e saborosas prontas para o seu dia.",
    image: catMarmitas,
    alt: "Marmita completa com arroz, feijão e carne da Villa Rotisseria",
  },
  {
    title: "Marmitas Fitness",
    description: "Opções saudáveis e balanceadas para quem cuida da alimentação.",
    image: catFitness,
    alt: "Marmita fitness com frango grelhado e legumes em Rio Preto",
  },
  {
    title: "Massas",
    description: "Massas artesanais com molhos feitos na hora.",
    image: catMassas,
    alt: "Massa fresca com molho de tomate da Villa Rotisseria",
  },
  {
    title: "Saladas",
    description: "Saladas frescas e coloridas com ingredientes selecionados.",
    image: catSaladas,
    alt: "Salada fresca e colorida da Villa Rotisseria",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="section-padding bg-background">
      <div className="container-villa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nosso <span className="text-primary">Cardápio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha entre nossas categorias e peça agora mesmo pelo CardápioWeb ou WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href="https://cardapio.villarotisseria.com.br"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              data-gtm={`cta-categoria-${cat.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver no Cardápio →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
