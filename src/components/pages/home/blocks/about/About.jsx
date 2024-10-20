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
          С 2024 года наша компания предоставляет услуги в сфере ипотеки и финансов, специализируясь на консалтинге и кредитных решениях для клиентов с отказами от банков. Мы помогаем с консолидацией долгов, ипотекой для пожилых, юридическими консультациями и страхованием. Сопровождаем клиентов в банковских и небанковских процессах, сотрудничая с ведущими экспертами по недвижимости. Наш профессионализм и накопленный опыт обеспечивают успешное решение финансовых вопросов клиентов, гарантируя надежную поддержку на каждом этапе.
        </p>
        <Link to='./aboutUs' className="color-yellow">
          <p className="about__subtitle color-yellow">Подробнее</p>
        </Link>
      </div>
      <div className="about__person">
        <div className="about__photo"></div>
        <p className="about__name"><strong>Евгений Рехтман</strong><br />Генеральный директор
        </p>
      </div>
    </div>
  )
}
