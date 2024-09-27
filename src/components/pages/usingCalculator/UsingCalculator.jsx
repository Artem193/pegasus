import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { FormWhite } from '../home/blocks/formWhite/FormWhite'
import { FormFromUsCalc } from "./formFromUsCalc/FormFromUsCalc";
import { NavUsCalc } from "./NavUsCalc";

import photoRehtman from '../../../images/basic1.png'

import './usingCalculator.scss';

export const UsingCalculator = ({ content, fixedArticles, titles }) => {
  return (
    <main className="usingCalculator">
      <Header />
      <div className="page usingCalculator">
        <div className="page__container">
          <div className="usingCalculator__flex">
            {content}
            <div className="usingCalculator__navForm">
              <FormFromUsCalc />
              <NavUsCalc titles={titles}/>
              {fixedArticles}
            </div>
          </div>
          <div className="usingCalculator__biography">
            <img
              src={photoRehtman}
              alt="photo"
              className="usingCalculator__photo"
            />
            <div className="usingCalculator__description">
              <h2 className="usingCalculator__subtitle">
                Должность Евгений Рехтман
              </h2>
              <p className="usingCalculator__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe magnam ut quas omnis ipsa ipsam culpa laborum? Assumenda, quo maxime! Harum corrupti asperiores explicabo illo dicta itaque? Inventore, nisi architecto?
              </p>
            </div>
          </div>
          <FormWhite />
        </div>
        <Footer />
      </div>
    </main>
  )
}
