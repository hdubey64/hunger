import React from "react";
import FeaturedSection from "src/Layout/FeaturedSection";
import Footer from "src/Layout/Footer";
import MenuSection from "src/Layout/MenuSection/MenuSection";
import OfferSection from "src/Layout/OfferSection";
import OrderSection from "src/Layout/OrderSection";
import PopularItemSection from "src/Layout/PopularItemSection";
import PramotionSection from "src/Layout/PramotionSection";
import SearchByFoodSection from "src/Layout/SearchByFoodSection";
import WorkSection from "src/Layout/WorkSection";
import Hero from "src/components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
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
};

export default Home;
