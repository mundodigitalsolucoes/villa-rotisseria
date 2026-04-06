import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CommercialSection from "@/components/CommercialSection";
import CardapioWebSection from "@/components/CardapioWebSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <DifferentialsSection />
        <CommercialSection />
        <CardapioWebSection />
        <SocialProofSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
};

export default Index;
