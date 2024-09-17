import React from "react";
import './solution.scss';

export const Solution = (
  {
    subtitle,
    subtitle1,
    subtitle2,
    text,
    text1,
    text2,
  }
) => {
  return (
    <div className="solution">
      <h1 className="solution__title">
        Для кого это решение?
      </h1>
      <div className="solution__stages">
        <div className="solution__stage">
          <div className="solution__img solution__img--1"></div>
          <h2 className="solution__subtitle">{subtitle}</h2>
          <p className="solution__text">
            {text}
          </p>
        </div>
        <div className="solution__stage">
          <div className="solution__img solution__img--2"></div>
          <h2 className="solution__subtitle">{subtitle1}</h2>
          <p className="solution__text">
            {text1}
          </p>
        </div>
        <div className="solution__stage">
          <div className="solution__img solution__img--3"></div>
          <h2 className="solution__subtitle">{subtitle2}</h2>
          <p className="solution__text">
            {text2}
          </p>
        </div>
      </div>
    </div>
  )
}
