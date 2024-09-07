import React from "react";

import Navbar from "../components/Navbar";
import Homescreen from "./HomeScreen";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Homescreen />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Home;
