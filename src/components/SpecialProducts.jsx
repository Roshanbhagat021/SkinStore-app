import { Button } from "@chakra-ui/react";
import data from "../data/specialProduct";
import Styles from "./ProductsCard.module.css";

function SpecialProducts({ Heading }) {
  return (
    <div>
      <h1
        style={{
          width: "100vw",
          maxWidth: "1400px",
          margin: "20px auto",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        {Heading}
      </h1>
      <div
        id={Styles.SpecialProducts}
      >
        {data.map((ele, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <a href={ele.link}>
                <img src={ele.image} style={{ width: "100%" }} alt="" />
              </a>
            </div>
            <div>
              <h3 style={{ margin: "0.5rem 0" }}>
                <b>{ele.heading}</b>
              </h3>
              <p style={{ margin: "0.5rem 0" }}>{ele.title}</p>
              <a href={ele.link}>
                <Button
                  variant="outline"
                  borderRadius={"none"}
                  border={"1px solid black"}
                  style={{ margin: "0.5rem 0" }}
                >
                  SHOP NOW
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialProducts;
