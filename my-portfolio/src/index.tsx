import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {UniversityBlog} from "./routes/university-blog";
import { BlogSelva } from "./routes/blog-selva";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/my-portfolio/" element={<App />} />
        <Route path="/universityblog" element={<UniversityBlog />} />
        <Route path="/blog-selva" element={<BlogSelva />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
