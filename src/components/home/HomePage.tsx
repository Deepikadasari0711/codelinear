import Navbar from "../layout/Navbar";
import Hero from "./Hero";
import SolutionSection from "./SolutionSection";
import FeaturesSection from "./FeaturesSection";
import ProductsSection from "./ProductsSection";
import StatisticsSection from "./StatisticsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="fixed left-1/2 top-[50px] z-50 w-[1076px] -translate-x-1/2">
        <Navbar />
      </div>

      <main className="relative min-h-screen w-[1440px] overflow-hidden bg-[#020C11] text-[#EAF4FB]">
        <Hero />
        <SolutionSection />
        <ProductsSection />
        <FeaturesSection />
        <StatisticsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
