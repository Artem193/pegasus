import React from "react";
import './freeUseCredit.scss';

export const FreeUseCredit = () => {
  return (
    <div className="freeUseCredit">
      <h1 className="freeUseCredit__title">
        Кредит можно использовать по вашему усмотрению для любых целей
      </h1>
      <ul className="freeUseCredit__list">
        <li className="freeUseCredit__item">
          Финансовая поддержка для образования ваших внуков
        </li>
        <li className="freeUseCredit__item">
          Финансовая поддержка для покупки дома для детей
        </li>
        <li className="freeUseCredit__item">
          Средства на планирование семейного отпуска
        </li>
        <li className="freeUseCredit__item">
          Финансирование медицинского ухода или лечения
        </li>
        <li className="freeUseCredit__item">
          Финансирование модернизации и ремонта вашего дома
        </li>
        <li className="freeUseCredit__item">
          Получение регулярного ежемесячного пособия
        </li>
      </ul>
    </div>
  )
}
