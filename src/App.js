import OfferSection from "./Layout/OfferSection";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import PopularItemSection from "./Layout/PopularItemSection";
import WorkSection from "./Layout/WorkSection";

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
