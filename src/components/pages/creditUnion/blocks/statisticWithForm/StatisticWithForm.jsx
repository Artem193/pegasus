import React from "react";
import { StatisticsFromCredit } from "./statisticsFromCredit/StatisticsFromCredit";
import { Form2 } from "./form2/Form2";

import './statisticWithForm.scss';

export const StatisticWithForm = () => {
  return (
    <div className="statisticWithForm">
      <StatisticsFromCredit />
      <Form2 />
    </div>
  )
}