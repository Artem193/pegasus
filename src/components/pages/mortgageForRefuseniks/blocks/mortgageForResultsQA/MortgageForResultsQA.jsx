import React from "react";
import { Explanation } from "../../../creditUnion/blocks/qa/explanation/Explanation";

import './mortgageForResultsQA.scss';

export const MortgageForResultsQA = () => {
  return (
    <div className="mortgageForResultsQA">
      <h1 className="mortgageForResultsQA__title">Вопросы и ответы по объединении кредитов</h1>
      <div className="mortgageForResultsQA__questions">
        <div className="mortgageForResultsQA__half">
          <Explanation
            title='Почему банк отказывает в ипотеке?'
            text='Отказ может быть связан с такими факторами, как плохая кредитная история, недостаточный уровень дохода, нехватка залогового имущества и другие причины.'
          />
          <Explanation
            title='Что такое BDI?'
            text='BDI — это финансовый отчет, содержащий данные о кредитной и финансовой истории граждан Израиля. Он помогает оценить финансовую репутацию как физических лиц, так и компаний, и используется для принятия решений по кредитам и финансовым сделкам.'
          />
          <Explanation
            title='Какую сумму погашения может утвердить банк?'
            text='Ежемесячный платеж определяется исходя из суммы кредита, процентной ставки и срока выплаты. Обычно банк может утвердить сумму погашения до 40% от дохода клиента, в соответствии с требованиями Банка Израиля.'
          />
          <Explanation
            title='Стоит ли обращаться в другие организации после отказа банка?'
            text='Да, можно обратиться в другие кредитные учреждения, такие как страховые компании или небанковские организации, которые могут предложить альтернативные решения после отказа банка.'
          />
        </div>
        <div className="mortgageForResultsQA__half">
          <Explanation
            title='Можно ли повторно подать заявление после отказа?'
            text='Да, после отказа можно подать повторное заявление. Важно разобраться в причинах отказа и исправить недостатки перед повторной подачей заявки.'
          />
          <Explanation
            title='Как успешно подать заявку на ипотеку?'
            text='Для успешной подачи заявки на ипотеку важно поддерживать высокий BDI, иметь не менее 25% собственных средств и выбрать кредит, соответствующий вашим возможностям. Помощь ипотечного консультанта может значительно повысить шансы на одобрение.'
          />
          <Explanation
            title='Какую максимальную сумму финансирования можно получить?'
            text='Банки могут предоставить до 75% от стоимости недвижимости, а небанковские организации — до 90%.'
          />
          <Explanation
            title='Есть ли преимущества у профессионала при подаче ипотеки?'
            text='Да, профессионалы обладают большим опытом работы с банками, знаниями о процентных ставках и навыками переговоров, что дает им преимущество перед частными лицами при подаче заявки на ипотеку.'
          />
        </div>
      </div>
    </div>
  )
}
