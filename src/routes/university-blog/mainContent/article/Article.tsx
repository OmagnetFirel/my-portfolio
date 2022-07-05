import React from "react";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import "./article.scss";

interface IArticle {
  title: string;
  subtitle: string;
  autor: string;
  date: string;
  banner: string;
  resume: string;
  profile: string;
}

export const Article = (props: IArticle) => {
  const { title, subtitle, autor, date, banner, resume, profile } = props;

  return (
    <div className="article">
      <div className="article-header">
        <div className="article-header__left">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="article-header__rigth">
          <p className="article-date">{date}</p>
          <div>
            {" "}
            <p>{autor}</p> <img src={profile} alt="profile pic" />{" "}
          </div>
        </div>
      </div>
      <div className="article-body">
        <img src={banner} alt="banner" />
        <p className="article-body__resume">{resume}</p>
      </div>
      <div className="article-footer">
        <a href="/" className="article-footer__continue-reading">CONTINUE READING</a>
        <div>
          <a href="/">GENERAL</a>
          <button className="article-footer__like-btn">
            <FavoriteRoundedIcon />{" "}28
          </button>
          <button className="article-footer__comment-btn">
            <ModeCommentRoundedIcon />{" "} 128
          </button>
        </div>
      </div>
    </div>
  );
};
