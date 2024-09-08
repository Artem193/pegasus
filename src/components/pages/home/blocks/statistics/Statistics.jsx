import React from "react";
import { ItemFromStatistics } from "./itemFromStatistics/ItemFromStatistics";

import './statistics.scss';

export const Statistics = () => {
  return (
    <div className="statistics">
      <div className="page__container">
        <div className="statistics__info">
          <ItemFromStatistics
            numbers='100%'
            text='Гарантии успеха'
          />
          <ItemFromStatistics
            numbers='100'
            text='Удовлетворённых клиентов'
          />
          <ItemFromStatistics
            numbers='100'
            text='Миллиардов шекелей выданных кредитов'
          />
          <ItemFromStatistics
            numbers='100'
            text='Лет работы'
          />
        </div>
      </div>
    </div>
  )
}