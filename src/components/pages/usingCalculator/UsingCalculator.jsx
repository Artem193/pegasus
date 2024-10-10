import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { FormWhite } from '../home/blocks/formWhite/FormWhite'
import { FormFromUsCalc } from "./formFromUsCalc/FormFromUsCalc";
import { NavUsCalc } from "./NavUsCalc";

import photoRehtman from '../../../images/Rehtman.png'

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
              <NavUsCalc titles={titles} />
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
                Генеральный директор
                <br />
                Евгений Рехтман
              </h2>
              <p className="usingCalculator__text">
                Консультант по ипотечным кредитам с опытом работы более 2 лет.
                Прошёл курс консультирования по ипотеке от имени Псагот-колледжа. Закончил курс Планирование выхода на пенсию в Финансовой Академии bdo. Прошел сертификацию по пенсионному планированию от имени Орина Шапелтера.
                Имею большой опыт управления портфелями частных и бизнес-клиентов.
                Привожу компанию к совершенству.
                <br />
                <br />
                סיים בהצלחה את קורס מתמחים בפיננסים למתקדמים
                מטעם אורין שפלטר
                סיים לימודים ניהול תהליכי פרישה האקדמיה לפיננסים BDOסיים הסמכה בתכנון פרישה מטעם אורין שפלטר
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
