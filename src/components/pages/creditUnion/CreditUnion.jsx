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
          <StagesOfWork />
        </div>
        <div className="page__container">
          <Solution />
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
