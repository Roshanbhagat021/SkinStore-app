import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  function prev() {
    setCurr((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }

  function next() {
    setCurr((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <div
          style={{
            display: "flex",
            transition: "all 0.5s ease",
            transform: `translateX(-${curr * 100}%)`,
          }}
        >
          {slides}
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            inset: "0",
            padding: "10px",
          }}
        >
          <Button colorScheme="blackAlpha" size="md" onClick={prev}>
            <ChevronLeftIcon />
          </Button>
          <Button colorScheme="blackAlpha" size="md" onClick={next}>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
