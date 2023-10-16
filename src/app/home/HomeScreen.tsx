import React from "react";
import MainSlider from "../componenets/MainSlider";
import CategorySlider from "../componenets/CategorySlider";
import ProductSlider from "../componenets/ProductSlider";
import RecentlyViewedSlider from "../componenets/RecentlyViewedSlider";
import DontMissTheseSlider from "../componenets/DontMissTheseSlider";

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
