import "./App.css";
import DrawerAppBar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import OfferSection from "./Layout/OfferSection";
import WorkSection from "./Layout/WorkSection";
import PopularItemSection from "./Layout/PopularItemSection";
import FeaturedSection from "./Layout/FeaturedSection";
import SearchByFoodSection from "./Layout/SearchByFoodSection";

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Hero />
      <OfferSection />
      <WorkSection />
      <PopularItemSection />
      <FeaturedSection />
      <SearchByFoodSection />
    </div>
  );
}
export default App;
