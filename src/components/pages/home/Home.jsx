/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Header } from "../../header/Header";
import { BackgroundAnime } from "../../backgroundAnime/BackgroundAnime";
import { FormGreen } from "./blocks/formGreen/FormGreen";
import { Services } from "./blocks/services/Services";
import { About } from "./blocks/about/About";
import { Statistics } from "./blocks/statistics/Statistics";
import { Advantages } from "./blocks/advantages/Advantages";
import { Reviews } from "./blocks/reviews/reviews";
import { FormGreenBigger } from "./blocks/formGreenBigger/FormGreenBigger";
import { Articles } from "./blocks/articles/Articles.jsx";
import { FormWhite } from "./blocks/formWhite/FormWhite";
import { Footer } from "../../footer/Footer";
import { articles } from './blocks/articles/articles.js'

import './home.scss';

export const Home = () => {
  return (
    <body>
      <Header />
      <BackgroundAnime />
      <main className="page">
        <div className="page__container">
          <Services />
        </div>
        <FormGreen />
        <div className="page__container">
          <About />
        </div>
        <Statistics />
        <div className="page__container">
          <Advantages />
        </div>
        <Reviews />
        <FormGreenBigger />
        <div className="page__container">
          <Articles articles={articles} title='Экспертная информация' articleClass='articles__article--height'/>
        </div>
        <div className="page__container">
          <FormWhite />
        </div>
        <Footer />
      </main>
    </body>
  )
}
