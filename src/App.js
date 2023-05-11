import "./App.css";
import DrawerAppBar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import OfferSection from "./Layout/OfferSection";
import WorkSection from "./Layout/WorkSection";
import PopularItemSection from "./Layout/PopularItemSection";
import FeaturedSection from "./Layout/FeaturedSection";
import SearchByFoodSection from "./Layout/SearchByFoodSection";
import MenuSection from "./Layout/MenuSection/MenuSection";
import PramotionSection from "./Layout/PramotionSection";
import OrderSection from "./Layout/OrderSection";
import Footer from "./Layout/Footer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Hero />
      <Login />
      <OfferSection />
      <WorkSection />
      <PopularItemSection />
      <FeaturedSection />
      <SearchByFoodSection />
      <PramotionSection />
      <MenuSection />
      <OrderSection />
      <Footer />
    </div>
  );
}
export default App;
