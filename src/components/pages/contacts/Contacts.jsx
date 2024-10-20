import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { FormWhite } from '../home/blocks/formWhite/FormWhite'

import './contacts.scss';

export const Contacts = () => {
  return (
    <main className="contacts">
      <Header />
      <div className="page contacts">
        <div className="page__container">
          <h1 className="contacts__title">Наши контакты</h1>
          <h2 className="contacts__subtitle">Ашкелон</h2>
          <div className="contacts__list">
            <div className="contacts__contact">
              <div className="contacts__icon contacts__icon--location"></div>
              <a
                href="https://maps.app.goo.gl/EaYT1kLxq2ameDpe6"
                className="contacts__text"
                target="_blank"
              >
                Адрес: Бикэт-Римон, 43
              </a>
            </div>
            <div className="contacts__contact">
              <div className="contacts__icon contacts__icon--phone"></div>
              <p className="contacts__text">Телефон: <a href="+972545991090" className="contacts__link">054-5991090</a></p>
            </div>
            <div className="contacts__contact">
              <div className="contacts__icon contacts__icon--wp"></div>
              <p className="contacts__text">Whatsapp: <a href="https://wa.me/972545991090" className="contacts__link">054-5991090</a></p>
            </div>
            <div className="contacts__contact">
              <div className="contacts__icon contacts__icon--calendar"></div>
              <p className="contacts__text">График работы: ВС - ЧТ 8:30 до 15:30​</p>
            </div>
          </div>
          <FormWhite />
        </div>
        <Footer />
      </div>
    </main>
  )
}