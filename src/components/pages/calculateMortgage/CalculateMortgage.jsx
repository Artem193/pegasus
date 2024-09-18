import React from "react";
import { Header } from '../../header/Header'
import { Footer } from '../../footer/Footer'
import { Calculate } from "./blocks/calculate/Calculate";
import { WhyWeAdvantages } from "./blocks/whyWeAdvantages/WhyWeAdvantages";
import { WhoIsSolution } from "./blocks/whoIsSolution/WhoIsSolution";

import './calculateMortgage.scss'

export const CalculateMortgage = () => {
  return (
    <main className="calculateMortgage">
      <Header />
      <div className="page calculateMortgage">
        <div className="page__container">
          <Calculate />
          <WhyWeAdvantages />
          <WhoIsSolution />
        </div>
        <Footer />
      </div>
    </main>
  )
}
