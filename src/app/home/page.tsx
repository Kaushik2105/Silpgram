import React from "react";

import Navbar from "../componenets/Navbar";
import Homescreen from "./HomeScreen";
import Footer from "../componenets/Footer";
import ScrollButton from "../componenets/ScrollToTop";

const home = () => {
  return (
    <>
      <Navbar />
      <Homescreen />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default home;
