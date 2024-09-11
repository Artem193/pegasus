import React from "react";
import './advantagesMortgage.scss';

export const AdvantagesMortgage = () => {
  return (
    <div className="advantagesMortgage">
      <h1 className="advantagesMortgage__title">
        Какие преимущества обратной ипотеки?
      </h1>
      <div className="advantagesMortgage__advantages">
        <div className="advantagesMortgage__advantage">
          <div className="advantagesMortgage__img advantagesMortgage__img--1"></div>
          <h2 className="advantagesMortgage__subtitle">Вы владеете недвижимостью исключительно самостоятельно</h2>
        </div>
        <div className="advantagesMortgage__advantage">
          <div className="advantagesMortgage__img advantagesMortgage__img--2"></div>
          <h2 className="advantagesMortgage__subtitle">Никаких гарантий для получения не требуется</h2>
        </div>
        <div className="advantagesMortgage__advantage">
          <div className="advantagesMortgage__img advantagesMortgage__img--3"></div>
          <h2 className="advantagesMortgage__subtitle">Разнообразные методы ежемесячного погашения</h2>
        </div>
        <div className="advantagesMortgage__advantage">
          <div className="advantagesMortgage__img advantagesMortgage__img--4"></div>
          <h2 className="advantagesMortgage__subtitle">Кредит для любых целей</h2>
        </div>
      </div>
    </div>
  )
}
