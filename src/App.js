import OfferSection from "./Layout/OfferSection";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import PopularItemSection from "./Layout/PopularItemSection";

function App() {
   return (
      <div>
         <Navbar />
         <Hero />
         <OfferSection />
         <PopularItemSection />
      </div>
   );
}

export default App;
