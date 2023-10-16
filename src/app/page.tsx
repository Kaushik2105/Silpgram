import React from "react";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import ScrollButton from "./componenets/ScrollToTop";
import Product from "./componenets/Product";
import Homescreen from "./home/page";
import Cart from "./componenets/Cart";

export default function Home() {
  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
}
