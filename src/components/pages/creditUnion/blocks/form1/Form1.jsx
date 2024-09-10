import React from "react";
import './form1.scss'

export const Form1 = () => {
  return (
    <form className="form1">
      <div className="page__container">
        <h1 className="form1__title">
          <span className="color-yellow">Оставьте свой номер</span> <span className="color-white">телефона, чтобы получить бесплатную консультацию!</span>
        </h1>
        <div className="form1__inputs">
          <input
            type="text"
            id="name"
            className="form1__input"
            placeholder="Имя"
          />
          <input
            type="tel"
            id="phone"
            className="form1__input"
            placeholder="Телефон"
          />
          <input
            type="email"
            id="email"
            className="form1__input"
            placeholder="Email"
          />
          <input
            type="submit"
            id="submit"
            className="form1__input form1__input--submit"
          />
        </div>
      </div>
    </form>
  )
}
