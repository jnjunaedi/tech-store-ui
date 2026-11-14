import CategorySection from './components/CategorySection';
import BestProductSection from './components/BestProduct';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProdcutSection from './components/ProductSection';
import Topbar from './components/Topbar';
import FlashSaleSection from './components/FlashSaleSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="pb-10 max-w-6xl mx-auto">
        <HeroSection />
        <CategorySection />
        <BestProductSection />
        <FlashSaleSection />
        <ProdcutSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
