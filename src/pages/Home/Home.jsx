import React from "react";
import Carousel from "./Carousel";
import ProductFeature from "./ProductFeature";

export default function Home() {
  return (
    <div className="container">
      {/* Carousel */}
      <Carousel/>
      {/* ProductFeature */}
      <ProductFeature/>
    </div>
  );
}

