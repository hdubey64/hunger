import OfferSection from "./Layout/OfferSection";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import PopularItemSection from "./Layout/PopularItemSection";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OfferSection />
      <Work />
      <PopularItemSection />
    </div>
  );
}

export default App;
