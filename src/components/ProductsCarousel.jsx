// import productDetails from "../data/productDetails1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";
import { Button } from "@chakra-ui/react";

function ProductsCarousel({ children, productDetails }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        maxWidth: "1400px",
        margin: "100px auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem" }}>{children}</h1>
      <div style={{ marginTop: "20px" }}>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {productDetails.map((d) => (
            <div key={d.title}>
              <a href={d.link}>
                <div>
                  <img
                    src={d.image}
                    alt=""
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "20px" }}>{d.title}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // inset: "0",
            inset: "0",
            top: "10%",

            padding: "10px",
          }}
        >
          <Button colorScheme="blackAlpha" size="md" onClick={previous}>
            <ChevronLeftIcon />
          </Button>
          <Button colorScheme="blackAlpha" size="md" onClick={next}>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCarousel;
