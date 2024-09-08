import React from "react";
import './articles.scss';

import articlesPhoto1 from '../../../../../images/articlesPhoto1.png'
import articlesPhoto2 from '../../../../../images/articlesPhoto2.png'
import articlesPhoto3 from '../../../../../images/articlesPhoto3.png'
import articlesPhoto4 from '../../../../../images/articlesPhoto4.png'
import articlesPhoto5 from '../../../../../images/articlesPhoto5.png'
import articlesPhoto6 from '../../../../../images/articlesPhoto6.png'

const articles = [
  {
    id: 1,
    img: articlesPhoto1,
    subtitle: 'Как рассчитать и использовать калькулятор машканты в Израиле',
    text: 'Машканта — это ипотечный кредит, позволяющий приобрести недвижимость в Израиле. Этот кредитный инструмент важен для тех, кто планирует стать владельцем собственного дома или квартиры...',
    link: 'Подробнее...',
  },
  {
    id: 2,
    img: articlesPhoto2,
    subtitle: 'Дополнительный кредит для ипотеки',
    text: 'Мечта о собственной квартире требует получения ипотеки, но в условиях финансовых сложностей вам может понадобиться дополнительный кредит, чтобы реализовать эту мечту...',
    link: 'Подробнее...',
  },
  {
    id: 3,
    img: articlesPhoto3,
    subtitle: 'Финансирование строительства бомбоубежища в Израиле',
    text: 'Граждане Израиля ежедневно сталкиваются с вызовами безопасности, враждебными действиями и экзистенциальными тревогами. Один из последних вызовов безопасности, который привёл к необходимости...',
    link: 'Подробнее...',
  },
  {
    id: 4,
    img: articlesPhoto4,
    subtitle: 'Кто может получить отказ в ипотеке?',
    text: 'Причинами отказа могут быть отрицательная кредитная история или финансовые затруднения. Примеры таких клиентов включают лица с ограниченной ответственностью, банкротов и тех, кто находится в стадии исполнительного производства...',
    link: 'Подробнее...',
  },
  {
    id: 5,
    img: articlesPhoto5,
    subtitle: 'Ипотека для людей с отрицательным BDI',
    text: 'Заявители на ипотеку часто впервые сталкиваются с понятием BDI. Обычно они не знают о BDI до момента, пока не потребуется оформление ипотечного кредита...',
    link: 'Подробнее...',
  },
  {
    id: 6,
    img: articlesPhoto6,
    subtitle: 'Залог имущества для получения ипотечного кредита',
    text: 'Мечта о доме универсальна; нет человека, который не хотел бы иметь собственное жильё или не мечтал бы о крыше над головой. Дом — это...',
    link: 'Подробнее...',
  },
];

export const Articles = () => {
  return (
    <div className="articles">
      <h1 className="articles__title">Экспертная информация</h1>
      <div className="articles__types">
        {articles.map((article) => (
          <div className="articles__article" key={article.id}>
            <img
              src={article.img}
              alt="photo"
              className="articles__photo"
            />
            <h2 className="articles__subtitle">
              {article.subtitle}
            </h2>
            <p className="articles__text">
              {article.text}
            </p>
            <a href="#" className="articles__link">{article.link}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
