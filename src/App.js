
import OfferSection from "./Layout/OfferSection";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
       <OfferSection />
    </div>
  );

}

export default App;
