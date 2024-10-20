import React from "react";
import { ItemFromCredit } from "./itemFromCredit/ItemFromCredit";

import './statisticsFromCredit.scss';

export const StatisticsFromCredit = () => {
  return (
    <div className="statisticsFromCredit">
      <div className="page__container">
        <div className="statisticsFromCredit__info">
          <ItemFromCredit
            numbers='95%'
            text='Гарантии успеха'
          />
          <ItemFromCredit
            numbers='100'
            text='Удовлетворённых клиентов'
          />
          <ItemFromCredit
            numbers='5'
            text='Миллиардов шекелей выданных кредитов'
          />
          <ItemFromCredit
            numbers='2'
            text='Года работы'
          />
        </div>
      </div>
    </div>
  )
}