import React from "react";
import MainSlider from "../components/MainSlider";
import CategorySlider from "../components/CategorySlider";
import ProductSlider from "../components/ProductSlider";
import RecentlyViewedSlider from "../components/RecentlyViewedSlider";
import DontMissTheseSlider from "../components/DontMissTheseSlider";

const Homescreen = () => {
  return (
    <>
      <MainSlider />
      <CategorySlider />
      <ProductSlider />
      <DontMissTheseSlider />
      <RecentlyViewedSlider />
    </>
  );
};

export default Homescreen;
