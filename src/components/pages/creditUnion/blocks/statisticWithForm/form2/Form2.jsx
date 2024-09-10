import React from "react";
import './form2.scss'

export const Form2 = () => {
  return (
    <form className="form2">
      <div className="page__container">
        <h1 className="form2__title">
          <span className="color-yellow">Пусть наши специалисты</span> <span className="color-white">подберут для вас наилучшие финансовые решения!</span>
        </h1>
        <div className="form2__inputs">
          <input
            type="text"
            id="name"
            className="form2__input"
            placeholder="Имя"
          />
          <input
            type="tel"
            id="phone"
            className="form2__input"
            placeholder="Телефон"
          />
          <input
            type="email"
            id="email"
            className="form2__input"
            placeholder="Email"
          />
          <input
            type="submit"
            id="submit"
            className="form2__input form2__input--submit"
          />
        </div>
      </div>
    </form>
  )
}
