import React from "react";
import './creditUnion.scss';

import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { CreditUnionIsrael } from "./blocks/creditUnionIsrael/CreditUnionIsrael";
import { StagesOfWork } from "./blocks/stagesOfWork/StagesOfWork";
import { Solution } from "./blocks/solution/Solution";
import { Form1 } from "./blocks/form1/Form1";
import { Qa } from "./blocks/qa/Qa";
import { CreditAboutUs } from "./blocks/creditAboutUs/CreditAboutUs";
import { WhyWe } from "./blocks/whyWe/WhyWe";
import { StatisticWithForm } from "./blocks/statisticWithForm/StatisticWithForm";
import { Reviews } from "../home/blocks/reviews/reviews";
import { FormWhite } from "../home/blocks/formWhite/FormWhite";

export const CreditUnion = () => {
  return (
    <main className="creditUnion">
      <Header />
      <CreditUnionIsrael />
      <div className="page creditUnion">
        <div className="page__container">
          <StagesOfWork title='Мы поможем объединить ваши кредиты и снизить выплаты' />
        </div>
        <div className="page__container">
          <Solution
            subtitle='Два и более кредита'
            subtitle1='Наличие недвижимости'
            subtitle2='Консолидация кредитов'
            text='на сумму свыше 120,000 шекелей'
            text1='Недвижимость имеется у вас или ваших родителей'
            text2='Объединение займов на более длительный срок с пониженной процентной ставкой для уменьшения ежемесячных платежей'
          />
        </div>
        <Form1 />
        <div className="page__container">
          <Qa />
        </div>
        <div className="page__container">
          <CreditAboutUs />
        </div>
        <div className="page__container">
          <WhyWe />
        </div>
        <StatisticWithForm />
        <Reviews />
        <FormWhite />
        <Footer />
      </div>
    </main>
  )
}
