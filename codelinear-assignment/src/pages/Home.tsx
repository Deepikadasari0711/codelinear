import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SolutionSection from "../components/home/SolutionSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductsSection from "../components/home/ProductsSection";
import StatisticsSection from "../components/home/StatisticsSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <main className="relative min-h-screen min-w-[1920px] bg-[#020C11]">
      <div className="absolute left-[378px] top-[50px] z-50 w-[1164px]">
        <Navbar />
      </div>
      <Hero />
      <SolutionSection />
      <ProductsSection />
      <FeaturesSection />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
