import Header from '@/react-app/components/Header';
import HeroSection from '@/react-app/components/HeroSection';
import ServicesSection from '@/react-app/components/ServicesSection';
import WhyChooseUsSection from '@/react-app/components/WhyChooseUsSection';
import PaymentMethodsSection from '@/react-app/components/PaymentMethodsSection';
import ContactSection from '@/react-app/components/ContactSection';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PaymentMethodsSection />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
