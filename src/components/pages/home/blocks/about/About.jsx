import React from "react";
import { Link } from "react-router-dom";

import './about.scss';

export const About = () => {
  return (
    <div className="about">
      <div className="about__article">
        <p className="about__subtitle">Кто мы?</p>
        <h1 className="about__title color-yellow">PEGASUS</h1>
        <p className="about__text">
          С 2010 года мы специализируемся на ипотеке и финансовых услугах. Наша компания предоставляет финансовый консалтинг, ипотеку для тех, кому отказали в банках, консолидацию кредитов, ипотеку для пожилых людей, юридические консультации и страхование. Мы сопровождаем клиентов как в банковской, так и в небанковской сферах и сотрудничаем с ведущей юридической фирмой по недвижимости. Наши методы, опыт и профессионализм гарантируют успешное решение всех ваших финансовых вопросов
        </p>
        <Link to='./aboutUs' className="color-yellow">
          <p className="about__subtitle color-yellow">Подробнее</p>
        </Link>
      </div>
      <div className="about__person">
        <div className="about__photo"></div>
        <p className="about__name"><strong>Евгений Рехтман</strong><br />Должность</p>
      </div>
    </div>
  )
}
