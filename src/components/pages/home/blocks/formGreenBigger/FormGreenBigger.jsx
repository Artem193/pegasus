import React from "react";
import './formGreenBigger.scss'

export const FormGreenBigger = () => {
  return (
    <form className="formGreenBigger">
      <div className="page__container">
        <h1 className="formGreenBigger__title">
          <span className="color-yellow">Пусть наши специалисты подберут для вас наилучшие финансовые решения!</span>
        </h1>
        <h2 className="formGreenBigger__subtitle">
          Заполните форму, и наш специалист свяжется с вами в кратчайшие сроки
        </h2>
        <div className="formGreenBigger__inputs">
          <input
            type="text"
            id="name"
            className="formGreenBigger__input"
            placeholder="Имя"
          />
          <input
            type="tel"
            id="phone"
            className="formGreenBigger__input"
            placeholder="Телефон"
          />
          <input
            type="email"
            id="email"
            className="formGreenBigger__input"
            placeholder="Email"
          />
          <input
            type="submit"
            id="submit"
            className="formGreenBigger__input formGreenBigger__input--submit"
          />
        </div>
      </div>
    </form>
  )
}
