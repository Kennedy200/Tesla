import Hero from './components/Hero';
import RobotSection from './components/RobotSection';
import TeslaProductsSection from './components/TeslaProductsSection';
import TeslaInfoSection from './components/TeslaInfoSection';
import Promotion from './components/Promotion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <RobotSection />
      <TeslaProductsSection />
      <TeslaInfoSection />
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
