import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { UniversityBlog } from "./routes/university-blog";
import { BlogSelva } from "./routes/blog-selva";
import { P1FundWeb } from "./routes/p1-fundweb";
import { SuperTodo } from "./routes/supertodo";
import { SignUpWrapper } from "./routes/signup";

import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/universityblog" element={<UniversityBlog />} />
          <Route path="/blog-selva" element={<BlogSelva />} />
          <Route path="/p1-fundweb" element={<P1FundWeb />} />
          <Route path="/supertodo" element={<SuperTodo />} />
          <Route path="/signup" element={<SignUpWrapper />} />
        </Routes>
      </HashRouter>
    </BrowserRouter>
  </React.StrictMode>
);
