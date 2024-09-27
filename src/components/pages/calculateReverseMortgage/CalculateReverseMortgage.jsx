import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../header/Header";
import { Footer } from "../../footer/Footer";

import calculateReverseMortgageImg from '../../../images/tableReverseMortgage__photo.jpg'
import './calculateReverseMortgage.scss'

export const CalculateReverseMortgage = () => {
  return (
    <main className="calculateReverseMortgage">
      <Header />
      <div className="page calculateReverseMortgage">
        <div className="page__container">
          <h1 className="calculateReverseMortgage__title">
            Калькулятор обратной ипотеки
          </h1>
          <p className="calculateReverseMortgage__text">
            Калькулятор обратной ипотеки — это полезный инструмент для людей старше 55 лет, помогающий принимать взвешенные решения о своей недвижимости. Прежде чем рассмотреть его преимущества, разберёмся, что такое обратная ипотека и почему она стала популярной среди пожилых людей.
          </p>
          <h2 className="calculateReverseMortgage__subtitle">
            Что такое обратная ипотека?
          </h2>
          <p className="calculateReverseMortgage__text">
            <Link to='/reverseMortgage' className="calculateReverseMortgage__link">Обратная ипотека</Link> — это особый вид кредита, предназначенный для людей в возрасте 55 лет и старше, который выдаётся под залог их существующей недвижимости. В отличие от обычной ипотеки, этот финансовый продукт имеет уникальные особенности и преимущества.
          </p>
          <h2 className="calculateReverseMortgage__subtitle">
            Ключевые особенности обратной ипотеки
          </h2>
          <p className="calculateReverseMortgage__text">
            <strong>Неограниченный срок кредита:</strong> В отличие от стандартных ипотечных кредитов с фиксированным сроком, обратная ипотека не имеет ограничений по времени. Кредит остаётся доступным, пока вы продолжаете жить в своём доме.
            <br /> <br />
            <strong>Нет требований к погашению:</strong> Одним из главных преимуществ обратной ипотеки является отсутствие обязательных ежемесячных платежей, что делает её привлекательной для людей с нестабильным доходом или без пенсионных накоплений.
            <br /> <br />
            <strong>Нет необходимости в страховании жизни:</strong> В отличие от традиционных кредитов, обратная ипотека не требует страховки жизни, что снижает финансовые затраты для заёмщиков.
          </p>
          <h2 className="calculateReverseMortgage__subtitle">
            Варианты погашения
          </h2>
          <p className="calculateReverseMortgage__text">
            Обратная ипотека предоставляет несколько вариантов погашения, которые могут быть адаптированы под различные финансовые потребности:
            <ul>
              <li className="calculateReverseMortgage__item">
                Единовременное погашение: Платежи по процентам и основной сумме откладываются до окончания срока кредита, позволяя использовать средства без влияния на ваш текущий доход.
              </li>
              <li className="calculateReverseMortgage__item">
                Льготное погашение: При этом варианте вы оплачиваете только проценты, а основной долг возвращается по завершении кредита, что позволяет гибко управлять финансами.
              </li>
              <li className="calculateReverseMortgage__item">
                Частичное погашение: Возможность досрочного частичного возврата средств в любое время позволяет уменьшить задолженность и сохранить капитал.
              </li>
            </ul>
          </p>
          <h2 className="calculateReverseMortgage__subtitle">
            Что такое калькулятор обратной ипотеки?
          </h2>
          <p className="calculateReverseMortgage__text">
            Калькулятор обратной ипотеки помогает рассчитать потенциальную сумму кредита, учитывая возраст заёмщика и стоимость недвижимости. Он позволяет понять финансовые последствия разных сценариев и вариантов погашения, помогая принять осознанное решение о будущем.
            <div className="calculateReverseMortgage__img">
              <img
                src={calculateReverseMortgageImg}
                alt="photo"
                className="calculateReverseMortgage__photo"
              />
            </div>
          </p>
          <h2 className="calculateReverseMortgage__subtitle">
            Калькулятор для расчёта суммы кредита
          </h2>
          <p className="calculateReverseMortgage__text">
            С помощью калькулятора обратной ипотеки пожилые люди могут детально изучить свои возможности, определить подходящий вариант и обеспечить себе финансовую безопасность. Этот инструмент помогает оценить, как выбранный путь повлияет на их капитал и соответствовать их личным финансовым целям.
            <br /> <br />
            В мире, где финансовая стабильность играет ключевую роль, обратная ипотека предлагает надёжное решение для пожилых людей, стремящихся к финансовой независимости и комфорту в зрелом возрасте.
          </p>
        </div>
        <Footer />
      </div>
    </main>
  )
}
