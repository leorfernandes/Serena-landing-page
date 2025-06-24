import Features from '../../components/Features';
import FinalCTA from '../../components/FinalCTA';
import Footer from '../../components/Footer';
import Headbar from '../../components/Headbar';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';

export default function HomePage() {
  return (
    <>
      <Headbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </>
  );
}
