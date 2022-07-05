import React from "react";
import "./styles.scss";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

interface iHeaderProps {
  logo: string;
  menuItems: Array<{ name: string; link: string }>;
}

export const Header = (props: iHeaderProps) => {
  const { logo, menuItems } = props;
  return (
    <header className="header">
      <div className="header-container">
        <h4 className="header__logo">{logo}</h4>
        <div className="header__menu">
          {menuItems.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="header__user-tools">
            <button className="search">
                <SearchIcon />
            </button>
            <button className="menu">
              <MenuIcon />
            </button>
        </div>
      </div>
    </header>
  );
};
