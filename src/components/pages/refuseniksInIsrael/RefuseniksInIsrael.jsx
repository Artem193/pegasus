import React from "react";
import { Header } from '../../header/Header'
import { Footer } from '../../footer/Footer'
import { BasicBlock } from "./blocks/basicBlock/BasicBlock";
import { ProcessOfWork } from "./blocks/processOfWork/ProcessOfWork";

import './refuseniksInIsrael.scss';

export const RefuseniksInIsrael = () => {
  return (
    <main className="refuseniksInIsrael">
      <Header />
      <div className="page refuseniksInIsrael">
        <div className="page__container">
          <BasicBlock />
          <ProcessOfWork />
        </div>
        <Footer />
      </div>
    </main>
  )
}
