import React from "react";
import './solution.scss';

export const Solution = () => {
  return (
    <div className="solution">
      <h1 className="solution__title">
        Для кого это решение?
      </h1>
      <div className="solution__stages">
        <div className="solution__stage">
          <div className="solution__img solution__img--1"></div>
          <h2 className="solution__subtitle">Два и более кредита</h2>
          <p className="solution__text">
            на сумму свыше 120,000 шекелей
          </p>
        </div>
        <div className="solution__stage">
          <div className="solution__img solution__img--2"></div>
          <h2 className="solution__subtitle">Наличие недвижимости</h2>
          <p className="solution__text">
            Недвижимость имеется у вас или ваших родителей
          </p>
        </div>
        <div className="solution__stage">
          <div className="solution__img solution__img--3"></div>
          <h2 className="solution__subtitle">Консолидация кредитов</h2>
          <p className="solution__text">
            Объединение займов на более длительный срок с пониженной процентной ставкой для уменьшения ежемесячных платежей
          </p>
        </div>
      </div>
    </div>
  )
}
