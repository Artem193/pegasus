import React from "react";
import './services.scss'

export const Services = () => {
  return (
    <div className="services">
      <h1 className="services__title">
        <span className="color-yellow">Расширенные</span> финансовые решения
      </h1>
      <div className="services__types">
        <div className="services__service">
          <h2 className="services__subtitle">Объединение кредитов</h2>
          <div className="services__descriptions">
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                Мы сведем все ваши кредиты в один ипотечный займ
              </p>
            </div>
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                Рассрочка будет подобрана так, чтобы вам было удобно погашать долг
              </p>
            </div>
          </div>
          <a href="#" className="services__link">
            <div className="services__button">
              Объединение кредитов
            </div>
          </a>
        </div>
        <div className="services__service">
          <h2 className="services__subtitle">Ипотека для людей, получивших отказ в банке</h2>
          <div className="services__descriptions">
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                Наша компания предлагает финансирование и ипотечные решения
              </p>
            </div>
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                Даже если вы уволены или имеете негативную кредитную историю
              </p>
            </div>
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                Мы возьмём на себя заботу о ваших финансовых решениях
              </p>
            </div>
          </div>
          <a href="#" className="services__link">
            <div className="services__button">
              Ипотека если вы получили отказ
            </div>
          </a>
        </div>
        <div className="services__service">
          <h2 className="services__subtitle">Ипотека для пожилых граждан</h2>
          <div className="services__descriptions">
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                Мы поможем вам сохранить высокий уровень жизни и расширить финансирование ваших планов
              </p>
            </div>
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                таких как помощь детям, привлечение иностранного помощника для ухода за вами, ремонт дома или путешествия
              </p>
            </div>
            <div className="services__description">
              <div className="services__image"></div>
              <p className="services__text">
                Мы предложим вам специальный кредит, который не требует ежемесячных выплат и не требует продажи вашего дома.
              </p>
            </div>
          </div>
          <a href="#" className="services__link">
            <div className="services__button">
              Пенстонная ипотека
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
