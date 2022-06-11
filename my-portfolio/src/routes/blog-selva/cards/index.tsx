import React from "react";
import { Card } from "./Cards";
import "./cards.scss";
import card1 from "../../../assets/images/blog-selva/pic01.jpg";
import card2 from "../../../assets/images/blog-selva/pic02.jpg";
import card3 from "../../../assets/images/blog-selva/pic03.jpg";

export const CardContainr = () => {
  return (
    <section className="selva-card-container">
      <Card
        image={card1}
        title="AENEAN ELEMENTUN FACILISIS"
        description="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. Lorem Ipsum has been the 
            industrys standard dummy text ever since the 1500s"
        link="/"
      />
      <Card
        image={card2}
        title="AENEAN ELEMENTUN FACILISIS"
        description="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. Lorem Ipsum has been the 
            industrys standard dummy text ever since the 1500s"
        link="/"
      />
      <Card
        image={card3}
        title="AENEAN ELEMENTUN FACILISIS"
        description="Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. Lorem Ipsum has been the 
            industrys standard dummy text ever since the 1500s"
        link="/"
      />
    </section>
  );
};
