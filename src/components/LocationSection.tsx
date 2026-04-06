import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container-villa">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Onde <span className="text-primary">estamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venha nos visitar ou peça delivery para o seu endereço em São José do Rio Preto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm">
                  São José do Rio Preto - SP
                </p>
                <a
                  href="https://maps.app.goo.gl/g5BEWhamd8UiAZw9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all"
                  data-gtm="cta-mapa"
                >
                  <Navigation className="w-4 h-4" />
                  Abrir rota no Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Horário de Atendimento</h3>
                <p className="text-muted-foreground text-sm">Segunda a Sábado: 10h às 15h</p>
                <p className="text-muted-foreground text-sm">Domingo: Sob encomenda</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-whatsapp" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/5517992091750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp font-semibold text-sm"
                  data-gtm="cta-telefone"
                >
                  (17) 99209-1750
                </a>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://cardapio.villarotisseria.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-villa text-sm py-3 px-6"
                data-gtm="cta-peca-agora-localizacao"
              >
                Peça Agora
              </a>
              <a
                href="https://wa.me/5517992091750?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido%20na%20Villa%20Rotisseria."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3 px-6"
                data-gtm="cta-whatsapp-localizacao"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card h-80 md:h-full min-h-[320px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.!2d-49.37!3d-20.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlsbGEgUm90aXNzZXJpYQ!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Villa Rotisseria em São José do Rio Preto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
