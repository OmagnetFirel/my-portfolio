import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
interface iHeaderProps {
  menu: menuItem[];
  cta: ctaProps;
}

interface menuItem {
  name: string;
  link: string;
}

interface ctaProps {
  text: string;
  link: string;
}

export const Header = (props: iHeaderProps) => {
  const { menu, cta } = props;
  return (
    <header>
      <div className="headerContainer">
        <FontAwesomeIcon icon={faAtom} size="xs" spin />
        <nav className="headerMenu">
          <ul>
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="headerCta">
          <a href={cta.link}>{cta.text}</a>
        </div>
      </div>
    </header>
  );
};
