import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";


interface iCardProject {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const CardProject = (props: iCardProject) => {
  const { title, description, image, link, tags } = props;

  return (
    <div className="card-project">
      <Link to={link}>
        <img src={image} alt={title} />
        <div className="card-container">
          <h3 className="card-container__title">{title}</h3>
          <div className="projectTagsWrapper">
            {tags.map((tag) => {
              return <p>{tag}</p>;
            })}
          </div>
          <p className="card-container__description">{description}</p>
        </div>
      </Link>
    </div>
  );
};
