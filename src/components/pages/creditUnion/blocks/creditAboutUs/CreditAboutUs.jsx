import React from "react";
import './creditAboutUs.scss'

export const CreditAboutUs = () => {
  return (
    <div className="creditAboutUs">
      <h1 className="creditAboutUs__title"><span className="color-yellow">О нас</span></h1>
      <div className="creditAboutUs__people">
        <div className="creditAboutUs__man">
          <div className="creditAboutUs__photo creditAboutUs__photo--1"></div>
          <p className="creditAboutUs__name"><strong>Евгений Рехтман</strong><br />Должность</p>
          <p className="creditAboutUs__text">Короткая биография Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non at omnis minus eaque atque officia sint expedita incidunt culpa repellendus vitae ab iusto doloremque laborum inventore quis. Maxime, repellat!</p>
        </div>
        <div className="creditAboutUs__man">
          <div className="creditAboutUs__photo creditAboutUs__photo--2"></div>
          <p className="creditAboutUs__name"><strong>Роман Гозданкер</strong><br />Должность</p>
          <p className="creditAboutUs__text">Короткая биография Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non at omnis minus eaque atque officia sint expedita incidunt culpa repellendus vitae ab iusto doloremque laborum inventore quis. Maxime, repellat!</p>
        </div>
      </div>
    </div>
  )
}
