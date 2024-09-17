import React from "react";
import { CallToActionForm } from "./callToActionForm/CallToActionForm";

import './callToAction.scss';

export const CallToAction = () => {
  return (
    <div className="callToAction">
      <div className="callToAction__textContent">
        <h1 className="callToAction__title">
          Получили отказ от банка по машканте?
        </h1>
        <h2 className="callToAction__subtitle">
          Мы обеспечим <strong>95% гарантии</strong> по вашей ипотеке! Предварительное решение за 48 часов!
        </h2>
        <h2 className="callToAction__subtitle">
          <span className="color-yellow">Бесплатная консультация: </span><a href="tel:+1 234 555-55-55" className="callToAction__link">077-1111111 (WhatsApp)</a>, работаем 24/7
        </h2>
      </div>
      <CallToActionForm />
    </div>
  )
}