import React from "react";
import "./styles.scss";
interface iCardProps {
  image: string;
  title: string;
  date: string;
  profile: string;
}

export const CardPostagem = (props: iCardProps) => {
  const { image, title, date, profile } = props;

  return (
    <div className="asideCard">
        <img src={image} alt="publicacao banner" />
        <div className="asideCard__content">
            <div>
            <h3>{title}</h3>
            <p>{date}</p>
            </div>
            <img src={profile} alt="profile pic" />     
        </div>
    </div>
    );
};
