import React from "react";
import { Explanation } from "./explanation/Explanation";

import './qa.scss';

export const Qa = () => {
  return (
    <div className="qa">
      <h1 className="qa__title">Вопросы и ответы по объединении кредитов</h1>
      <div className="qa__questions">
        <div className="qa__half">
          <Explanation
            title='Как работает консолидация кредита?'
            text='Консолидация кредита — это процесс, при котором несколько займов объединяются в один с более длительным сроком. Это позволяет сократить размер ежемесячных выплат, облегчить процесс погашения и улучшить управление финансовыми обязательствами.'
          />
          <Explanation
            title='Какие типы кредитов можно объединить?'
            text='В консолидацию можно включить множество кредитов, таких как студенческие займы, долги по кредитным картам от различных банков, автокредиты, потребительские кредиты для домашних нужд и многие другие. Условия и процесс могут различаться в зависимости от вида кредита.'
          />
          <Explanation
            title='Как консолидация кредита сказывается на ежемесячных платежах?'
            text='Консолидация может привести к снижению ежемесячных выплат за счет более длительного срока погашения или снижения процентной ставки по кредиту.'
          />
          <Explanation
            title='Какие плюсы у консолидации кредита?'
            text='К преимуществам консолидации относятся упрощение процесса погашения, снижение ежемесячных платежей, наличие фиксированной процентной ставки и возможность выбора удобных условий погашения, в зависимости от типа объединенных долгов.'
          />
        </div>
        <div className="qa__half">
          <Explanation
            title='Как консолидация кредита влияет на кредитный рейтинг?'
            text='Консолидация кредита сама по себе не оказывает прямого воздействия на кредитный рейтинг. Тем не менее, если процесс включает закрытие старых счетов или открытие нового кредитного счета, это может временно повлиять на ваш рейтинг. Важно ответственно управлять новым кредитом, чтобы поддерживать или улучшать свою кредитную историю.'
          />
          <Explanation
            title='Можно ли консолидировать кредиты, если есть финансовые проблемы?'
            text='Да, консолидация кредитов может быть подходящим вариантом для людей, сталкивающихся с финансовыми затруднениями. Это может помочь уменьшить ежемесячные выплаты, но важно изучить все возможные варианты и понять их долгосрочные эффекты перед принятием решения.'
          />
          <Explanation
            title='Как запустить процесс консолидации кредита?'
            text='Вы можете начать процесс консолидации, связавшись с нами по WhatsApp или заполнив специальную анкету. Наш сотрудник свяжется с вами в кратчайшие сроки и предоставит полную информацию.'
          />
        </div>
      </div>
    </div>
  )
}