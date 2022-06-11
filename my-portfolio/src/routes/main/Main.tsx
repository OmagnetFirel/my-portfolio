import React from "react";
import "./styles.scss";
import { Introduction } from "./sections/Introduction/Introduction";
import { About } from "./sections/About/About";
import { Projects } from "./sections/projects/Projects";

export const Main = () => {
  return (
    <main>
      <Introduction />
      <About />
      <Projects />
    </main>
  );
};
