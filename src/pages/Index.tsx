import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ComplaintForm from '@/components/ComplaintForm';
import CredibilitySection from '@/components/CredibilitySection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ComplaintForm />
      <CredibilitySection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
