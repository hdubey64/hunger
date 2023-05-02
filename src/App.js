import "./App.css";
import OfferSection from "./Layout/OfferSection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import WorkSection from "./Layout/WorkSection";
import PopularItemSection from "./Layout/PopularItemSection";
import FeaturedSection from "./Layout/FeaturedSection";
import DrawerAppBar from "./components/Navbar";

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Hero />
      <OfferSection />
      <WorkSection />
      <PopularItemSection />
       <FeaturedSection />
    </div>
  );


export default App;
