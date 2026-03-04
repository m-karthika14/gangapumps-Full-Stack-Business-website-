import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PressurePumpsBangalore from './pages/PressurePumpsBangalore';
import WaterPressurePumpBangalore from './pages/WaterPressurePumpBangalore';
import PressureBoosterPumpBangalore from './pages/PressureBoosterPumpBangalore';
import PressurePumpForHome from './pages/PressurePumpForHome';
import PressurePumpForApartment from './pages/PressurePumpForApartment';
import BoosterPumpForBuilding from './pages/BoosterPumpForBuilding';
import GrundfosPressurePumps from './pages/GrundfosPressurePumps';
import GrundfosPumpDealerBangalore from './pages/GrundfosPumpDealerBangalore';
import GrundfosBoosterPump from './pages/GrundfosBoosterPump';
import GrundfosScalaPump from './pages/GrundfosScalaPump';
import GrundfosWaterPressurePump from './pages/GrundfosWaterPressurePump';
import SubmersiblePumpsBangalore from './pages/SubmersiblePumpsBangalore';
import SubmersiblePumpForBorewell from './pages/SubmersiblePumpForBorewell';
import BorewellSubmersiblePump from './pages/BorewellSubmersiblePump';
import SubmersiblePumpDealerBangalore from './pages/SubmersiblePumpDealerBangalore';
import DeepWellSubmersiblePump from './pages/DeepWellSubmersiblePump';
import PressurePumpsWhitefield from './pages/PressurePumpsWhitefield';
import PressurePumpsBtm from './pages/PressurePumpsBtm';
import PressurePumpsHsrLayout from './pages/PressurePumpsHsrLayout';
import PressurePumpsElectronicCity from './pages/PressurePumpsElectronicCity';
import PressurePumpsMarathahalli from './pages/PressurePumpsMarathahalli';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import About from './pages/About';
import Blogs from './pages/Blogs';
import PressurePumpsInBangalore from './pages/PressurePumpsInBangalore';
import BestWaterPressurePumpApartmentBangalore from './pages/BestWaterPressurePumpApartmentBangalore';
import HowToIncreaseWaterPressureApartment from './pages/HowToIncreaseWaterPressureApartment';
import BestBoosterPumpHome from './pages/BestBoosterPumpHome';
import GrundfosScala2Review from './pages/GrundfosScala2Review';
import WaterPressurePumpInstallationBangalore from './pages/WaterPressurePumpInstallationBangalore';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
// import { FaWhatsapp } from 'react-icons/fa'; // Commented since button is disabled

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <DataProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-cream flex flex-col justify-between relative">
              <Navbar />

              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/pressure-pumps-bangalore" element={<PressurePumpsBangalore />} />
                  <Route path="/water-pressure-pump-bangalore" element={<WaterPressurePumpBangalore />} />
                  <Route path="/pressure-booster-pump-bangalore" element={<PressureBoosterPumpBangalore />} />
                  <Route path="/pressure-pump-for-home" element={<PressurePumpForHome />} />
                  <Route path="/pressure-pump-for-apartment" element={<PressurePumpForApartment />} />
                  <Route path="/booster-pump-for-building" element={<BoosterPumpForBuilding />} />
                  <Route path="/product/:slug" element={<ProductDetail />} />
                  
                  <Route path="/grundfos-pressure-pumps" element={<GrundfosPressurePumps />} />
                  <Route path="/grundfos-pump-dealer-bangalore" element={<GrundfosPumpDealerBangalore />} />
                  <Route path="/grundfos-booster-pump" element={<GrundfosBoosterPump />} />
                  <Route path="/grundfos-scala-pump" element={<GrundfosScalaPump />} />
                  <Route path="/grundfos-water-pressure-pump" element={<GrundfosWaterPressurePump />} />
                  <Route path="/submersible-pumps-bangalore" element={<SubmersiblePumpsBangalore />} />
                  <Route path="/submersible-pump-for-borewell" element={<SubmersiblePumpForBorewell />} />
                  <Route path="/borewell-submersible-pump" element={<BorewellSubmersiblePump />} />
                  <Route path="/submersible-pump-dealer-bangalore" element={<SubmersiblePumpDealerBangalore />} />
                  <Route path="/deep-well-submersible-pump" element={<DeepWellSubmersiblePump />} />
                  <Route path="/pressure-pumps-whitefield" element={<PressurePumpsWhitefield />} />
                  <Route path="/pressure-pumps-btm" element={<PressurePumpsBtm />} />
                  <Route path="/pressure-pumps-hsr-layout" element={<PressurePumpsHsrLayout />} />
                  <Route path="/pressure-pumps-electronic-city" element={<PressurePumpsElectronicCity />} />
                  <Route path="/pressure-pumps-marathahalli" element={<PressurePumpsMarathahalli />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/blogs/pressure-pumps-in-bangalore" element={<PressurePumpsInBangalore />} />
                  <Route path="/blogs/best-water-pressure-pump-apartment-bangalore" element={<BestWaterPressurePumpApartmentBangalore />} />
                  <Route path="/blogs/how-to-increase-water-pressure-apartment" element={<HowToIncreaseWaterPressureApartment />} />
                  <Route path="/blogs/best-booster-pump-home" element={<BestBoosterPumpHome />} />
                  <Route path="/blogs/grundfos-scala2-review" element={<GrundfosScala2Review />} />
                  <Route path="/blogs/water-pressure-pump-installation-bangalore" element={<WaterPressurePumpInstallationBangalore />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>

              <Footer />
              <PopupForm />

              {/* 
              ✅ Sticky WhatsApp Chat Button — Commented Out
              <div className="fixed bottom-5 right-5 z-50 group flex items-center space-x-2">
                <span className="opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 translate-x-2 transition-all duration-300 bg-[#25D366] text-white px-3 py-2 rounded-md shadow-md text-sm font-inter whitespace-nowrap">
                  Text on WhatsApp
                </span>
                <a
                  href={`https://wa.me/919986082495?text=${encodeURIComponent(
                    'Please send us your:\nName - \nPhone Number - \nProduct/Request - '
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
              */}
            </div>
          </Router>
        </DataProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
