import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { CallToAction } from "./blocks/callToAction/CallToAction";
import { StagesOfWork } from "../creditUnion/blocks/stagesOfWork/StagesOfWork";
import { Solution } from "../creditUnion/blocks/solution/Solution";
import { Form1 } from "../creditUnion/blocks/form1/Form1";
import { MortgageForResultsQA } from "./blocks/mortgageForResultsQA/MortgageForResultsQA";
import { Experts } from "../aboutUs/blocks/experts/Experts";
import { WhyWe } from "../creditUnion/blocks/whyWe/WhyWe";
import { StatisticWithForm } from "../creditUnion/blocks/statisticWithForm/StatisticWithForm";
import { Reviews } from '../home/blocks/reviews/reviews'
import { FormWhite } from '../home/blocks/formWhite/FormWhite'

import './mortgageForRefuseniks.scss';

export const MortgageForRefuseniks = () => {
  return (
    <main className="mortgageForRefuseniks">
      <Header />
      <div className="page mortgageForRefuseniks">
        <div className="page__container">
          <CallToAction />
          <StagesOfWork title='Не получили машканту от банка? Мы найдем решение!' />
          <Solution
            subtitle='Ваш BDI имеет отрицательный статус?'
            subtitle1='Банк не дал вам одобрение?'
            subtitle2='Люди с историей банкротства'
          />
        </div>
        <Form1 />
        <div className="page__container">
          <MortgageForResultsQA />
          <Experts />
          <WhyWe />
        </div>
        <StatisticWithForm />
        {/* <Reviews /> */}
        <div className="page__container">
          <FormWhite />
        </div>
        <Footer />
      </div>
    </main>
  )
}