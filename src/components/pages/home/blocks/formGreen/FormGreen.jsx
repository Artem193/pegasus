import React from "react";
import './formGreen.scss'

export const FormGreen = () => {
  return (
    <form className="formGreen">
      <div className="page__container">
        <h1 className="formGreen__title">
          <span className="color-yellow">Пусть наши специалисты</span> <span className="color-white">подберут для вас наилучшие финансовые решения!</span>
        </h1>
        <div className="formGreen__inputs">
          <input
            type="text"
            id="name"
            className="formGreen__input"
            placeholder="Имя"
          />
          <input
            type="tel"
            id="phone"
            className="formGreen__input"
            placeholder="Телефон"
          />
          <input
            type="email"
            id="email"
            className="formGreen__input"
            placeholder="Email"
          />
          <input
            type="submit"
            id="submit"
            className="formGreen__input formGreen__input--submit"
          />
        </div>
      </div>
    </form>
  )
}
