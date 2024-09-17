import React from "react";
import { CallToActionForm } from "../../../mortgageForRefuseniks/blocks/callToAction/callToActionForm/CallToActionForm";

import './basicBlock.scss';

export const BasicBlock = () => {
  return (
    <div className="basicBlock">
      <div className="basicBlock__textContent">
        <h1 className="basicBlock__title">
          Ипотека после отказа
        </h1>
        <h2 className="basicBlock__subtitle">
          Получили отказ от банка?
          <br /><br />
          Мы поможем вам решить эту проблему с поддержкой нашей команды ипотечных экспертов и юридического отдела. Наша цель — обеспечить вам наилучшую ипотеку.
          <br /><br />
          <strong>Когда банки говорят «нет»,</strong> <span className="color-yellow">мы говорим «да»!</span>
        </h2>
      </div>
      <CallToActionForm />
    </div>
  )
}