import React from "react";
import './advantages.scss';

export const Advantages = () => {
  return (
    <div className="advantages">
      <h1 className="advantages__title">
        <span className="color-yellow">Pegasus</span><span className="color-green"> облегчит Вашу жизнь</span>
      </h1>
      <div className="advantages__types">
        <div className="advantages__advantage">
          <div className="advantages__img advantages__img--1"></div>
          <h2 className="advantages__subtitle">Персональный подход и высокий уровень сервиса</h2>
          <p className="advantages__description">
            Мы организуем сотрудничество с банками, небанковскими структурами, фондами и страховыми компаниями за Вас
          </p>
        </div>
        <div className="advantages__advantage">
          <div className="advantages__img advantages__img--2"></div>
          <h2 className="advantages__subtitle">Группа высококвалифицированных экспертов</h2>
          <p className="advantages__description">
            Профессиональная поддержка наших специалистов приведёт Вас к успеху
          </p>
        </div>
        <div className="advantages__advantage">
          <div className="advantages__img advantages__img--3"></div>
          <h2 className="advantages__subtitle">Индивидуальный подход</h2>
          <p className="advantages__description">
            Мы найдём для Вас оптимальное решение для достижения Ваших финансовых целей
          </p>
        </div>
      </div>
    </div>
  )
}
