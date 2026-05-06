import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Results from '../components/Results';
import Problem from '../components/Problem';
import Approach from '../components/Approach';
import CaseStudies from '../components/CaseStudies';
import Services from '../components/Services';
import Differentiation from '../components/Differentiation';
import Testimonials from '../components/Testimonials';
import ProofBand from '../components/ProofBand';
import FAQ from '../components/FAQ';
import Discovery from '../components/Discovery';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Results />
        <Problem />
        <Approach />
        <CaseStudies />
        <Services />
        <Differentiation />
        <Testimonials />
        <ProofBand />
        <FAQ />
        <Discovery />
      </main>
      <Footer />
    </>
  );
}
