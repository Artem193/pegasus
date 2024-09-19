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
              <p className="contacts__text">Адрес: </p>
            </div>
            <div className="contacts__contact">
              <div className="contacts__icon contacts__icon--phone"></div>
              <p className="contacts__text">Телефон: </p>
            </div>
            <div className="contacts__contact">
              <div className="contacts__icon contacts__icon--wp"></div>
              <p className="contacts__text">Whatsapp</p>
            </div>
            <div className="contacts__contact">
              <div className="contacts__icon contacts__icon--calendar"></div>
              <p className="contacts__text">График работы: </p>
            </div>
          </div>
          <FormWhite />
        </div>
        <Footer />
      </div>
    </main>
  )
}