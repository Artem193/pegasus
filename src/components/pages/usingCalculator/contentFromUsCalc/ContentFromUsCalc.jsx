import React from "react";
import { Link } from "react-router-dom";

import articlesPhoto1 from '../../../../images/articlesPhoto1.png'

import './contentFromUsCalc.scss';

export const ContentFromUsCalc = () => {
  return (
    <div className="contentFromUsCalc">
      <h1 className="contentFromUsCalc__title">
        Как рассчитать и использовать калькулятор машканты в Израиле
      </h1>
      <img
        src={articlesPhoto1}
        alt="img"
        className="contentFromUsCalc__img"
      />
      <p className="contentFromUsCalc__text">
        Машканта — это ипотечный кредит, предназначенный для покупки недвижимости в Израиле. Для многих людей это важный шаг на пути к собственному жилью. В этой статье мы рассмотрим, кому доступна машканта, на какой срок предоставляется, кто может её получить, и как воспользоваться калькулятором машканты для расчёта ежемесячных платежей и условий кредита.
      </p>
      <h2 className="contentFromUsCalc__subtitle" id="usingCalculator1">
        Кто может получить машканту?
      </h2>
      <p className="contentFromUsCalc__text">
        Машканта в Израиле доступна как гражданам, так и резидентам страны. Основные условия включают:
        <ol>
          <li className="contentFromUsCalc__item">
            <strong>Возраст:</strong> Обычно кредит предоставляется лицам от 18 до 70 лет. В некоторых случаях банки могут предложить кредиты старшим людям, но на ограниченных условиях.
          </li>
          <li className="contentFromUsCalc__item">
            <strong>Стабильный доход:</strong> Банки требуют подтверждения дохода для оценки платёжеспособности. Это может быть зарплата, доход от бизнеса, пенсия или другие источники.
          </li>
          <li className="contentFromUsCalc__item">
            <strong>Кредитная история:</strong> Хорошая кредитная история повышает шансы на одобрение кредита.
          </li>
          <li className="contentFromUsCalc__item">
            <strong>Первоначальный взнос:</strong> Требуется 25-30% от стоимости недвижимости. Для некоторых категорий, таких как молодые пары, процент может быть ниже.
          </li>
        </ol>
      </p>
      <h2 className="contentFromUsCalc__subtitle" id="usingCalculator2">
        На какой срок предоставляется машканта?
      </h2>
      <p className="contentFromUsCalc__text">
        Срок варьируется от 10 до 30 лет. Долгий срок уменьшает ежемесячные платежи, но увеличивает общую переплату по процентам. Важно учесть свои финансовые возможности для выбора оптимального срока.
      </p>
      <h2 className="contentFromUsCalc__subtitle" id="usingCalculator3">
        Кто может претендовать на машканту?
      </h2>
      <ul className="contentFromUsCalc__text">
        <li className="contentFromUsCalc__item">
          <strong>Граждане Израиля:</strong> имеют право на ипотеку при выполнении всех условий.
        </li>
        <li className="contentFromUsCalc__item">
          <strong>Постоянные резиденты:</strong> также могут подать заявку на машканту.
        </li>
        <li className="contentFromUsCalc__item">
          <strong>Нерезиденты:</strong> в некоторых случаях могут получить кредит, но условия будут более жёсткими, включая повышенный первоначальный взнос.
        </li>
      </ul>
      <h2 className="contentFromUsCalc__subtitle" id="usingCalculator4">
        Что такое машканта?
      </h2>
      <p className="contentFromUsCalc__text">
        Машканта — это долгосрочный ипотечный кредит для покупки недвижимости. Процентная ставка может быть фиксированной или плавающей. Банки обычно требуют страхования недвижимости и жизни.
      </p>
      <h2 className="contentFromUsCalc__subtitle" id="usingCalculator5">
        Как использовать калькулятор машканты?
      </h2>
      <p className="contentFromUsCalc__text">
        Калькулятор машканты позволяет рассчитать ежемесячные платежи. Для этого необходимо ввести сумму кредита, процентную ставку, срок и первоначальный взнос. Калькулятор покажет ежемесячный платёж, общую сумму выплат и переплату по процентам.
      </p>

      <h2 className="contentFromUsCalc__subtitle" id="usingCalculator6">
        Какие дополнительные расходы могут возникнуть?
      </h2>
      <ol>
        <li className="contentFromUsCalc__item">
          <strong>Комиссии:</strong> Банки могут взимать плату за оформление кредита.
        </li>
        <li className="contentFromUsCalc__item">
          <strong>Страхование:</strong> Требуется страхование недвижимости и жизни.
        </li>
        <li className="contentFromUsCalc__item">
          <strong>Юридические услуги:</strong> Возможно, понадобится помощь адвоката.
        </li>
        <li className="contentFromUsCalc__item">
          <strong>Оценка недвижимости:</strong> Необходима для оформления кредита.
        </li>
      </ol>
      <h2 className="contentFromUsCalc__subtitle" id="usingCalculator7">
        Заключение
      </h2>
      <p className="contentFromUsCalc__text">
        Машканта — это важный финансовый инструмент для покупки недвижимости в Израиле. Знание условий, сроков и использование калькулятора поможет выбрать лучшие условия. Обратитесь в банк или к консультанту для персонализированной консультации.

        <Link to='/calculateMortgage' className="contentFromUsCalc__link"> Калькулятор машканты </Link>— это первый шаг к тому, чтобы оценить свои финансовые возможности и выбрать наиболее выгодное предложение. Удачи в покупке вашего нового дома!
      </p>
    </div>
  )
}
