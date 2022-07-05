import React from "react";
import "./minipost.scss";
interface IMiniPost {
  image: string;
  title: string;
  date: string;
}

export const MiniPost = (props: IMiniPost) => {
  const { image, title, date } = props;
  return (
    <div className="MiniPost">
      <img src={image} alt="publicacao banner" />
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};
