import React from "react";
import { FormReverseMashkanta } from "./formReverseMashkanta/FormReverseMashkanta";

import './reverseMashkanta.scss';

export const ReverseMashkanta = () => {
  return (
    <div className="reverseMashkanta">
      <div className="reverseMashkanta__textContent">
        <h1 className="reverseMashkanta__title">
          Машканта афуха – <span className="color-yellow reverseMashkanta__title--anime">обратная ипотека</span> в Израиле
        </h1>
        <h2 className="reverseMashkanta__subtitle">
          Ваш возраст 55 лет и старше?
        </h2>
        <h2 className="reverseMashkanta__subtitle">
          Используйте обратную ипотеку, чтобы сделать вашу старость беззаботной:
        </h2>
        <ul className="reverseMashkanta__list">
          <li className="reverseMashkanta__item">
            <strong>Пусть дом работает на вас:</strong> обеспечьте себе комфортную старость, используя его стоимость и оставаясь владельцем.
          </li>
          <li className="reverseMashkanta__item">
            <strong>Удобные выплаты:</strong> вы можете выбрать между регулярными ежемесячными поступлениями или единовременной суммой.
          </li>
          <li className="reverseMashkanta__item">
            <strong>Без обязательных платежей:</strong> оплата кредита откладывается до продажи дома, переезда в дом престарелых или до завершения жизненного пути.
          </li>
        </ul>
      </div>
      <div className="reverseMashkanta__form">
        <FormReverseMashkanta />
      </div>
    </div>
  )
}
