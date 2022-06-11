import React from "react";
import './cards.scss';

interface iCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const Card = (props: iCardProps) => {
  const { image, title, description, link } = props;
  return (
    <div className="selva-card">
      <h4 className="selva-card__title">{title}</h4>
      <img src={image} alt="banner do card" />
      <p className="selva-card__description">{description}</p>
      <a href={link} className="selva-card__link">
        {" "}
        MORE DETAILS{" "}
      </a>
    </div>
  );
};
