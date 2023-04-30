import OfferSection from "./Layout/OfferSection";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import WorkSection from "./Layout/WorkSection";
import HorizontalScroll from "./Layout/PopularItemSection";
import ArrowButton from "./components/ArrowButton";
import RightArrow from "src/Assets/Images/Icons/IconLeftArraow.svg";
import PopularItemSection from "./Layout/PopularItemSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OfferSection />
      <WorkSection />
      <PopularItemSection />
    </div>
  );
}

export default App;
