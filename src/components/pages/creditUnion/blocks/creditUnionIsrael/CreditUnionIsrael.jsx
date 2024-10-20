import React from "react";
import './creditUnionIsrael.scss';
import { FormStep } from "./formStep/FormStep";

export const CreditUnionIsrael = () => {
  return (
    <div className="creditUnionIsrael">
      <div className="creditUnionIsrael__background">
        <div className="creditUnionIsrael__photo"></div>
        <div className="creditUnionIsrael__color"></div>
      </div>
      <div className="creditUnionIsrael__blockForm">
        <h1 className="creditUnionIsrael__title">Консолидация кредитов в Израиле</h1>
        <p className="creditUnionIsrael__text">
          Консолидация кредитов и потребительских ссуд в Израиле. Объедините свои кредиты и ссуды, сократите ежемесячные выплаты до 50% и более всего за 45 дней.
        </p>
        <h2 className="creditUnionIsrael__subtitle">
          Бесплатная консультация:<br />
          <a href="tel:+972545991090" className="creditUnionIsrael__link"> 054-5991090</a>
        </h2>
        <h2 className="creditUnionIsrael__subtitle">
          <span className="color-green">Оцените свои варианты объединения кредитов</span> бесплатно!
        </h2>
        <FormStep />
      </div>
    </div>
  )
}