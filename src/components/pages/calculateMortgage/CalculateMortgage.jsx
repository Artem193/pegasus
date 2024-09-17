import React from "react";
import { Header } from '../../header/Header'
import { Footer } from '../../footer/Footer'
import { Calculate } from "./calculate/Calculate";

import './calculateMortgage.scss'

export const CalculateMortgage = () => {
  return (
    <main className="calculateMortgage">
      <Header />
      <div className="page calculateMortgage">
        <div className="page__container">
          <Calculate />
        </div>
        <Footer />
      </div>
    </main>
  )
}
