import React from "react";
import './stagesOfWork.scss';

export const StagesOfWork = ({ title }) => {
  return (
    <div className="stagesOfWork">
      <h1 className="stagesOfWork__title">
        {title}
      </h1>
      <div className="stagesOfWork__stages">
        <div className="stagesOfWork__stage">
          <div className="stagesOfWork__img stagesOfWork__img--1"></div>
          <h2 className="stagesOfWork__subtitle">Комплексное сопровождение</h2>
          <p className="stagesOfWork__text">
            Наши эксперты обеспечат вам тщательную и профессиональную поддержку до тех пор, пока вы не достигнете желаемых результатов
          </p>
        </div>
        <div className="stagesOfWork__stage">
          <div className="stagesOfWork__img stagesOfWork__img--2"></div>
          <h2 className="stagesOfWork__subtitle">Обеспечиваем успех</h2>
          <p className="stagesOfWork__text">
            С нашими опытными консультантами и налаженными контактами с ведущими банками и финансовыми учреждениями, вы можете быть уверены, что мы добьемся для вас максимально выгодных условий
          </p>
        </div>
        <div className="stagesOfWork__stage">
          <div className="stagesOfWork__img stagesOfWork__img--3"></div>
          <h2 className="stagesOfWork__subtitle">Оплата только за результат</h2>
          <p className="stagesOfWork__text">
            Мы предлагаем сопровождение, при котором вы платите только за достижение положительного результата. Если цели не достигнуты — никакой оплаты не потребуется!
          </p>
        </div>
        <div className="stagesOfWork__stage">
          <div className="stagesOfWork__img stagesOfWork__img--4"></div>
          <h2 className="stagesOfWork__subtitle">
            Комплексное сопровождение в банке
          </h2>
          <p className="stagesOfWork__text">
            Мы полностью возьмем на себя управление процессом и освободим вас от банковской рутины, вплоть до момента одобрения кредита
          </p>
        </div>
      </div>
    </div>
  )
}
