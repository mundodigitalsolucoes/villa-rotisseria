import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ShoppingBag, HelpCircle, Gift } from "lucide-react";

const options = [
  {
    icon: ShoppingBag,
    label: "Fazer um pedido",
    message: "Olá! Quero fazer um pedido na Villa Rotisseria.",
    gtm: "whatsapp-pedido",
  },
  {
    icon: HelpCircle,
    label: "Pedir informações",
    message: "Olá! Gostaria de saber mais sobre o cardápio da Villa Rotisseria.",
    gtm: "whatsapp-info",
  },
  {
    icon: Gift,
    label: "Fazer encomenda",
    message: "Olá! Quero fazer uma encomenda na Villa Rotisseria.",
    gtm: "whatsapp-encomenda",
  },
];

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-card rounded-2xl shadow-elevated p-5 w-72"
          >
            <p className="font-heading font-bold text-foreground mb-1">Villa Rotisseria</p>
            <p className="text-muted-foreground text-sm mb-4">Como podemos ajudar?</p>
            <div className="flex flex-col gap-2">
              {options.map((opt) => (
                <a
                  key={opt.label}
                  href={`https://wa.me/5517992091750?text=${encodeURIComponent(opt.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                  data-gtm={opt.gtm}
                >
                  <div className="w-9 h-9 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
                    <opt.icon className="w-4 h-4 text-whatsapp" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{opt.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Abrir WhatsApp"
        data-gtm="whatsapp-widget"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
