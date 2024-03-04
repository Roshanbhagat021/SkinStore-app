import React, { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import Styles from "./ProductsCard.module.css";
const Card = ({ image1, image2, title, offer, rating, reviews, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={Styles.card}>
      <img
        src={isHovered ? image2 : image1}
        alt="Card"
        className="card-image"
        style={isHovered ? { cursor: "pointer" } : { cursor: "none" }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
      <div className={Styles.card_content}>
        <h2 className={Styles.card_title}>{title}</h2>
        {offer.includes("Dermstore") ? (
          <p id={Styles.offer}>
            {offer
              .replace(new RegExp("\\b" + "Dermstore" + "\\s*\\b", "gi"), "")
              .trim()}{" "}
            <span id={Styles.Special_word}>
              <b>Dermstore</b>
            </span>
          </p>
        ) : (
          <p>{offer}</p>
        )}
        {/*     STARS AND REVIEW SECTION */}
        <p>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < Math.floor(rating) ? "black" : "#D1D1D1"}
              />
            ))}
          <span id={Styles.rating_box}>{rating}</span>
          <span id={Styles.reviews}>{reviews} Reviews</span>
        </p>

        <p id={Styles.price}>
          <b>{price}</b>
        </p>
        <button id={Styles.quickBuy_btn}>QUICK BUY</button>
      </div>
    </div>
  );
};

const CardList = ({ cards, heading="" }) => {
  return (
    <>
      <h1 id={Styles.heading}>{heading}</h1>

      <div className={Styles.card_list}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default CardList;
