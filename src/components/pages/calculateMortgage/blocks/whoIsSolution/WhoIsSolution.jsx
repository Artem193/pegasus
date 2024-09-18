import React from "react";
import './whoIsSolution.scss'

export const WhoIsSolution = () => {
  return (
    <div className="whoIsSolution">
      <h1 className="whoIsSolution__title">
        Кто может воспользоваться этим решением?
      </h1>
      <div className="whoIsSolution__stages">
        <div className="whoIsSolution__stage">
          <div className="whoIsSolution__img whoIsSolution__img--3"></div>
          <h2 className="whoIsSolution__subtitle">60 лет и старше</h2>
        </div>
        <div className="whoIsSolution__stage">
          <div className="whoIsSolution__img whoIsSolution__img--1"></div>
          <h2 className="whoIsSolution__subtitle">Молодожены и семьи с небольшим стажем</h2>
        </div>
        <div className="whoIsSolution__stage">
          <div className="whoIsSolution__img whoIsSolution__img--2"></div>
          <h2 className="whoIsSolution__subtitle">
            Лица, получившие отказ от банков
          </h2>
        </div>
        <div className="whoIsSolution__stage">
          <div className="whoIsSolution__img whoIsSolution__img--4"></div>
          <h2 className="whoIsSolution__subtitle">
            Люди, имеющие другую недвижимость
          </h2>
        </div>
        <div className="whoIsSolution__stage">
          <div className="whoIsSolution__img whoIsSolution__img--4"></div>
          <h2 className="whoIsSolution__subtitle">
            Люди, владеющие машкантой
          </h2>
        </div>
      </div>
    </div>
  )
}