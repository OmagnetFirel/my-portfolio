import React from "react";
import { Banner } from "./banner/Banner";
import { Miolo } from "./Miolo/Miolo";
import { CardContainr } from "./cards/index";
import { Footer } from "./footer/Footer";
import mioloImage from "../../assets/images/blog-selva/pic07.jpg";
import "./styles.scss";

export const BlogSelva = () => {
  return (
    <div>
      <Banner />
      <div className="mid-wrapper">
        <Miolo
          image={mioloImage}
          title="WELCOME TO LOREM IPSUM!"
          subtitle="Integer sit amet pede vel arcu aliquet pretium"
        />
      </div>
   
      <CardContainr />
      <Footer />
    </div>
  );
};
