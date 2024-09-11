import React from "react";
import { ExplanationQA } from "./explanationQA/ExplanationQA";

import './mortgageQA.scss';

export const MortgageQA = () => {
  return (
    <div className="mortgageQA">
      <h1 className="mortgageQA__title">Вопросы и ответы по объединении кредитов</h1>
      <div className="mortgageQA__questions">
        <div className="mortgageQA__half">
          <ExplanationQA
            title='Какая сумма доступна по обратной ипотеке?'
            text='Сумма кредита может составлять от 15% до 60% от стоимости недвижимости, как это определяет оценщик. Более высокий возраст заемщиков позволяет получить большую сумму кредита.'
          />
          <ExplanationQA
            title='Теряю ли я право собственности на жилье при получении обратной ипотеки?'
            text='Нет, право собственности на недвижимость всегда остается за заемщиками. Финансирующий орган получает только залоговое право, обеспечивающее кредит.'
          />
          <ExplanationQA
            title='Когда и как можно погасить заем?'
            text='Заем можно погасить в любой момент, не опасаясь штрафов или дополнительных комиссий за досрочное закрытие. Погашение может осуществляться через регулярные ежемесячные выплаты процентов или полностью, в случае продажи недвижимости заемщиками или их наследниками.'
          />
          <ExplanationQA
            title='Для каких целей можно использовать обратную ипотеку?'
            text='Обратная ипотека может быть использована для любых нужд: будь то финансирование отпуска мечты, поддержка детей в покупке жилья или любые другие личные расходы — решение остается за вами.'
          />
          <ExplanationQA
            title='Можно ли сдавать недвижимость в аренду при обратной ипотеке?'
            text='Да и нет. Некоторые финансирующие организации допускают сдачу недвижимости в аренду, однако вам потребуется предоставить договор аренды для проверки, чтобы убедиться, что он не подпадает под закон о защите арендаторов.'
          />
          <ExplanationQA
            title='Есть ли возможность продать недвижимость?'
            text='Да, вы можете продать свою недвижимость в любой момент. Погашение долга осуществляется за счет средств, полученных от продажи, без дополнительных штрафов или комиссий.'
          />
          <ExplanationQA
            title='Кому подходит обратная ипотека?'
            text='Претендовать на обратную ипотеку могут владельцы жилой квартиры, возраст которых составляет 55 лет и старше, при условии, что стоимость недвижимости превышает 1 миллион шекелей.'
          />
        </div>
        <div className="mortgageQA__half">
          <ExplanationQA
            title='Требуются ли поручители при оформлении обратной ипотеки?'
            text='Нет, поручители не нужны. Обратная ипотека позволяет вам оформить кредит без необходимости привлекать поручителей и предоставляет гибкие способы погашения.'
          />
          <ExplanationQA
            title='Передается ли долг по обратной ипотеке наследникам?'
            text='Нет, долг по обратной ипотеке не передается наследникам. Эта форма кредита относится к «безрегрессным», поэтому взыскание осуществляется исключительно за счет недвижимости.'
          />
          <ExplanationQA
            title='Какие ежемесячные выплаты предусмотрены при обратной ипотеке?'
            text='При обратной ипотеке вы сами решаете — либо вносите ежемесячные платежи по процентам, либо отказываетесь от них полностью. Все зависит от ваших предпочтений.'
          />
          <ExplanationQA
            title='Кто решает, сколько платить ежемесячно по обратной ипотеке?'
            text='Размер ежемесячного платежа определяется самим заемщиком, что обеспечивает полную свободу в управлении кредитом.'
          />
          <ExplanationQA
            title='Почему обратная ипотека лучше, чем традиционная ипотека или кредит?'
            text='Обратная ипотека дает вам свободу в управлении финансами, не требует подтверждения дохода и поручителей, и предлагает гибкие условия по ежемесячным платежам, которые можно адаптировать под свои нужды.'
          />
        </div>
      </div>
    </div>
  )
}
