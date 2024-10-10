import React from "react";
import { Header } from '../../header/Header'
import { Footer } from '../../footer/Footer'
import { Calculate } from "./blocks/calculate/Calculate";
import { WhyWeAdvantages } from "./blocks/whyWeAdvantages/WhyWeAdvantages";
import { WhoIsSolution } from "./blocks/whoIsSolution/WhoIsSolution";
import { StatisticWithForm } from '../creditUnion/blocks/statisticWithForm/StatisticWithForm'
import { Qa } from "./blocks/qa/Qa";
import { Experts } from '../aboutUs/blocks/experts/Experts';
import { WhyWe } from '../creditUnion/blocks/whyWe/WhyWe';
import { Reviews} from '../home/blocks/reviews/reviews';
import { FormWhite } from '../home/blocks/formWhite/FormWhite';

import './calculateMortgage.scss'

export const CalculateMortgage = () => {
  return (
    <main className="calculateMortgage">
      <Header />
      <div className="page calculateMortgage">
        <div className="page__container">
          <Calculate />
          <WhyWeAdvantages />
        </div>
        <StatisticWithForm />
        <div className="page__container">
          <WhoIsSolution />
          <Qa />
          <h1 className="calculateMortgage__title">Калькулятор ипотеки в Израиле</h1>
          <p className="calculateMortgage__text">
            Ипотека — это важный этап в жизни, и наш калькулятор ипотеки поможет вам сделать его максимально информированно. Рассчитайте ежемесячные платежи, общую стоимость кредита и процентные ставки с помощью нашего удобного инструмента.
          </p>
          <h2 className="calculateMortgage__subtitle">
            Преимущества калькулятора ипотеки
          </h2>
          <ul calculateMortgage__text>
            <li className="calculateMortgage__item">
              <strong>Точное планирование:</strong> Определите ежемесячные платежи, процентные расходы и общую сумму выплат.
            </li>
            <li className="calculateMortgage__item">
              <strong>Экономия времени:</strong> Быстрый расчет без необходимости использования сложных формул и таблиц.
            </li>
            <li className="calculateMortgage__item">
              <strong>Точное планирование:</strong> Интуитивно понятный интерфейс, подходящий для любого пользователя.
            </li>
          </ul>
          <h2 className="calculateMortgage__subtitle">
            Как использовать калькулятор ипотеки
          </h2>
          <ol>
            <li className="calculateMortgage__item">
              <strong>Введите сумму кредита:</strong> Укажите предполагаемую сумму займа.
            </li>
            <li className="calculateMortgage__item">
              <strong>Выберите срок кредита:</strong> Определите желаемый срок ипотеки.
            </li>
            <li className="calculateMortgage__item">
              <strong>Укажите процентную ставку:</strong> Введите процентную ставку, предложенную банком.
            </li>
            <li className="calculateMortgage__item">
              <strong>Дополнительные параметры:</strong> Учитывайте возможные единовременные выплаты и изменения в процентной ставке.
            </li>
          </ol>
          <h2 className="calculateMortgage__subtitle">
            Часто задаваемые вопросы (FAQ)
          </h2>
          <p className="calculateMortgage__text">
            <strong>Что такое ипотека?</strong>
            <br />
            Ипотека (машканта) — это кредит, предоставляемый банками Израиля для приобретения недвижимости
            <br />
            <br />
            <strong>Какие параметры учитывает калькулятор?</strong>
            <br />
            Калькулятор учитывает сумму кредита, срок кредита, процентную ставку и дополнительные параметры, такие как единовременные выплаты и изменения ставки.
            <br />
            <br />
            <strong>Как выбрать лучший банк для ипотеки?</strong>
            <br />
            Сравнивайте предложения различных банков, обращайте внимание на процентные ставки, условия погашения и дополнительные расходы.
          </p>
          <h2 className="calculateMortgage__subtitle">
            Полезные советы
          </h2>
          <ul calculateMortgage__text>
            <li className="calculateMortgage__item">
              <strong>Сравнивайте предложения:</strong> Учитывайте условия, процентные ставки и репутацию банка.
            </li>
            <li className="calculateMortgage__item">
              <strong>Планируйте бюджет::</strong> Включайте все возможные расходы, такие как страхование и налоги.
            </li>
            <li className="calculateMortgage__item">
              <strong>Консультируйтесь с экспертами:</strong> При необходимости обратитесь за советом к финансовым консультантам.
            </li>
          </ul>
          <p className="calculateMortgage__text">
            Наш калькулятор ипотеки — надежный инструмент для тех, кто планирует взять кредит на жилье в Израиле. Он поможет вам избежать непредвиденных расходов и сделать процесс получения ипотеки максимально прозрачным и предсказуемым.
          </p>
          <h2 className="calculateMortgage__subtitle">
            Поделитесь калькулятором
          </h2>
          <p className="calculateMortgage__text">
            Если наш калькулятор оказался полезным, поделитесь им с друзьями и близкими. Помогите другим сделать правильный выбор при планировании ипотечного кредита в Израиле.
          </p>
          <Experts />
          <WhyWe />
        </div>
        {/* <Reviews /> */}
        <div className="page_container">
          <FormWhite />
        </div>
        <Footer />
      </div>
    </main>
  )
}
