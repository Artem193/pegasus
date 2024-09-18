import React from "react";
import './whyWeAdvantages.scss'

export const WhyWeAdvantages = () => {
  return (
    <div className="whyWeAdvantages">
      <h1 className="whyWeAdvantages__title">
        Почему выбирают нас?
      </h1>
      <div className="whyWeAdvantages__stages">
        <div className="whyWeAdvantages__stage">
          <div className="whyWeAdvantages__img whyWeAdvantages__img--3"></div>
          <h2 className="whyWeAdvantages__subtitle">Оплата только за результат</h2>
        </div>
        <div className="whyWeAdvantages__stage">
          <div className="whyWeAdvantages__img whyWeAdvantages__img--1"></div>
          <h2 className="whyWeAdvantages__subtitle">Комплексное сопровождение</h2>
        </div>
        <div className="whyWeAdvantages__stage">
          <div className="whyWeAdvantages__img whyWeAdvantages__img--2"></div>
          <h2 className="whyWeAdvantages__subtitle">Обеспечиваем успех</h2>
        </div>
        <div className="whyWeAdvantages__stage">
          <div className="whyWeAdvantages__img whyWeAdvantages__img--4"></div>
          <h2 className="whyWeAdvantages__subtitle">
            Бесплатная консультация
          </h2>
        </div>
      </div>
    </div>
  )
}
