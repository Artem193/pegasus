import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { FormWhite } from '../home/blocks/formWhite/FormWhite'
import { Content } from "./blocks/content/Content";
import { FormFixed } from "./blocks/formFixed/FormFixed";

import './bankRefusal.scss';

export const BankRefusal = () => {
  return (
    <main className="bankRefusal">
      <Header />
      <div className="page bankRefusal">
        <div className="page__container">
          <div className="bankRefusal__flex">
            <Content />
            <FormFixed />
          </div>
          <FormWhite />
        </div>
        <Footer />
      </div>
    </main>
  )
}
