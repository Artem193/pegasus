import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { ReverseMashkanta } from "./blocks/reverseMashkanta/ReverseMashkanta";
import { FreeUseCredit } from "./blocks/freeUseCredit/FreeUseCredit";
import { AdvantagesMortgage } from "./blocks/advantagesMortgage/AdvantagesMortgage";
import { ProcessDetails } from "./blocks/processDetails/ProcessDetails";
import { MortgageWithPegasus } from "./blocks/mortgageWithPegasus/MortgageWithPegasus";
import { MortgageQA } from "./blocks/mortgageQA/MortgageQA";
import { Experts } from "../aboutUs/blocks/experts/Experts";
import { WhyWe } from "../creditUnion/blocks/whyWe/WhyWe";
import { StatisticWithForm } from "../creditUnion/blocks/statisticWithForm/StatisticWithForm";
import { Reviews } from "../home/blocks/reviews/reviews";
import { WhatIs } from "./blocks/whatIs/WhatIs";

import './reverseMortgage.scss';

export const ReverseMortgage = () => {
  return (
    <main className="reverseMortgage">
      <Header />
      <div className="page reverseMortgage">
        <div className="page__container">
          <ReverseMashkanta />
        </div>
        <div className="page__container">
          <FreeUseCredit />
        </div>
        <div className="page__container">
          <AdvantagesMortgage />
        </div>
        <div className="page__container">
          <ProcessDetails />
        </div>
        <MortgageWithPegasus />
        <div className="page__container">
          <MortgageQA />
        </div>
        <div className="page__container">
          <Experts />
        </div>
        <div className="page__container">
          <WhyWe />
        </div>
        <StatisticWithForm />
        <Reviews />
        <div className="page__container">
          <WhatIs />
        </div>
        <Footer />
      </div>
    </main>
  )
}