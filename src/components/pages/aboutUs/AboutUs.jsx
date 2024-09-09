import React from "react";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";
import { GeneralInfo } from "./blocks/generalInfo/GeneralInfo";
import { FormWhite } from "./blocks/formWhite/FormWhite";
import { Experts } from "./blocks/experts/Experts";
import { Departments } from "./blocks/departments/Departments";

import './aboutUs.scss';

export const AboutUs = () => {
  return (
    <main className="aboutUs">
      <Header />
      <div className="page aboutUs">
        <div className="page__container">
          <GeneralInfo />
        </div>
        <div className="page__container">
          <Experts />
        </div>
        <div className="page__container">
          <Departments />
        </div>
        <div className="page__container">
          <FormWhite />
        </div>
        <Footer />
      </div>
    </main>
  )
}