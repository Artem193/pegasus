import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { Articles } from "../home/blocks/articles/Articles.jsx";
import { articles } from "../home/blocks/articles/articles.js";

import './expertsInfo.scss';

export const ExpertsInfo = () => {
  return (
    <main className="expertsInfo">
      <Header />
      <div className="page expertsInfo">
        <div className="page__container">
          <Articles articles={articles} articleClass='articles__article--height'/>
        </div>
        <Footer />
      </div>
    </main>
  )
}
