import React from "react";
import { CardProject } from "./Card";
import card01 from "../../../../assets/images/blog-card.png";

import "./Projects.scss";

export const Projects = () => {
  return (
    <section id="projetos">
      <h4>Projects</h4>
      <div className="projectsWrapper">
        <CardProject
          title="Projeto X"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          link="/universityblog"
          image={card01}
          tags={["REACTTS", "JAVASCRIPT", "TYPESCRIPT", "SASS"]}
        />
        <CardProject
          title="SUPER BAD"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          link="/blog-selva"
          image={card01}
          tags={["REACTTS", "JAVASCRIPT", "TYPESCRIPT", "SASS"]}
        />
      </div>
    </section>
  );
};
