import React from "react";
import { Header } from "./header/Header";
import { MainContent } from "./mainContent";
import { Aside } from "./aside";
import "./styles.scss";
export const UniversityBlog = () => {
  return (
    <>
      <Header
        logo="CEFET - RJ"
        menuItems={[
          { name: "LOREM", link: "#" },
          { name: "IPSUM", link: "#" },
          { name: "FEUGIAT", link: "#" },
          { name: "TEMPUS", link: "#" },
          { name: "ADIPISCING", link: "#" },
        ]}
      />
      <div className="miolo">
        <Aside /> 
        <MainContent />
      </div>
    </>
  );
};
