import React from "react";
import { Header } from '../../header/Header'
import { Footer } from '../../footer/Footer'
import { BasicBlock } from "./blocks/basicBlock/BasicBlock";
import { ProcessOfWork } from "./blocks/processOfWork/ProcessOfWork";
import { MortgageForResultsQA } from "../mortgageForRefuseniks/blocks/mortgageForResultsQA/MortgageForResultsQA";
import { Experts } from "../aboutUs/blocks/experts/Experts";
import { WhyWe } from "../creditUnion/blocks/whyWe/WhyWe";
import { StatisticWithForm } from "../creditUnion/blocks/statisticWithForm/StatisticWithForm";
import { Reviews } from "../home/blocks/reviews/reviews";

import './refuseniksInIsrael.scss';

export const RefuseniksInIsrael = () => {
  return (
    <main className="refuseniksInIsrael">
      <Header />
      <div className="page refuseniksInIsrael">
        <div className="page__container">
          <BasicBlock />
          <ProcessOfWork />
          <MortgageForResultsQA />
          <Experts />
        </div>
        <StatisticWithForm />
        <div className="page__container">
          <WhyWe />
        </div>
        {/* <Reviews /> */}
        <Footer />
      </div>
    </main>
  )
}
