import React from "react";
import Navbar from "../componenets/Navbar";
import ScrollButton from "../componenets/ScrollToTop";
import Footer from "../componenets/Footer";

const privacypolicy = () => {
  return (
    <>
      <Navbar />
      <div className="aboutus">
        <div className="aboutusbody">
          <h1 className="aboutusheader">Privacy Policy</h1>
          <p className="aboutuspara">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            cumque, non quibusdam ex praesentium voluptas expedita quia, eum
            commodi, vitae provident. Vitae eos nemo voluptate voluptatibus ut
            delectus voluptatem pariatur porro velit placeat. Doloribus facere
            eveniet labore deserunt vel recusandae dolore beatae. Corrupti dicta
            velit deleniti corporis recusandae hic laboriosam rerum, et nam
            inventore quis quidem incidunt vero reiciendis veritatis odit totam
            nobis voluptatibus enim quaerat sequi molestiae? Molestias iusto
            consectetur veritatis veniam magni libero dolor perferendis quos
            aspernatur laudantium nemo alias illum culpa omnis delectus sunt,
            voluptatibus odit, odio rerum at ex quaerat porro! Tempore placeat
            nesciunt illum et esse, eum tenetur vel eveniet facere, cumque
            quidem id? Maiores suscipit amet facere, voluptas velit magni minima
            eos repellendus, perspiciatis doloribus
          </p>
        </div>
        <img
          className="aboutusimage"
          src="./productslider/2.jpeg"
          alt="IMAGE"
        />
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default privacypolicy;
