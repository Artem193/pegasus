import React from "react";
import './experts.scss'

export const Experts = () => {
  return (
    <div className="experts">
      <h1 className="experts__title"><span className="color-yellow">Наши ведущие </span>эксперты</h1>
      <div className="experts__people">
        <div className="experts__man">
          <div className="experts__photo experts__photo--1"></div>
          <p className="experts__name"><strong>Евгений Рехтман</strong><br />Должность</p>
          <p className="experts__text">Короткая биография Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non at omnis minus eaque atque officia sint expedita incidunt culpa repellendus vitae ab iusto doloremque laborum inventore quis. Maxime, repellat!</p>
        </div>
        <div className="experts__man">
          <div className="experts__photo experts__photo--2"></div>
          <p className="experts__name"><strong>Роман Гозданкер</strong><br />Должность</p>
          <p className="experts__text">Короткая биография Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non at omnis minus eaque atque officia sint expedita incidunt culpa repellendus vitae ab iusto doloremque laborum inventore quis. Maxime, repellat!</p>
        </div>
      </div>
    </div>
  )
}
