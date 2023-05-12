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
import Loding from "./components/Loading/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { Signin } from "./views/Auth";
import "aos/dist/aos.css";
import * as Aos from "aos";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
