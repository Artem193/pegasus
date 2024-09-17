import React from "react";
import './processOfWork.scss';

export const ProcessOfWork = () => {
  return (
    <div className="processOfWork">
      <h1 className="processOfWork__title">
        Наш процесс работы
      </h1>
      <div className="processOfWork__stages">
        <div className="processOfWork__stage">
          <div className="processOfWork__img processOfWork__img--1"></div>
          <h2 className="processOfWork__subtitle">Анализ причины отказа</h2>
          <p className="processOfWork__text">
            Отказ в ипотеке может быть вызван множеством факторов и обстоятельств. Поэтому важно выяснить, что именно стало причиной вашего отказа
          </p>
        </div>
        <div className="processOfWork__stage">
          <div className="processOfWork__img processOfWork__img--2"></div>
          <h2 className="processOfWork__subtitle">Улучшение финансового профиля</h2>
          <p className="processOfWork__text">
            Для успешной подачи заявки на ипотеку важно укрепить свой финансовый профиль через тщательно продуманную и стратегически выверенную процедуру
          </p>
        </div>
        <div className="processOfWork__stage">
          <div className="processOfWork__img processOfWork__img--3"></div>
          <h2 className="processOfWork__subtitle">Укрепление финансового профиля</h2>
          <p className="processOfWork__text">
            Увеличьте свои источники дохода, продемонстрируйте финансовую стабильность и диверсифицируйте источники дохода, чтобы создать надежные и убедительные аргументы
          </p>
        </div>
        <div className="processOfWork__stage">
          <div className="processOfWork__img processOfWork__img--4"></div>
          <h2 className="processOfWork__subtitle">
            Подготовка недвижимости
          </h2>
          <p className="processOfWork__text">
            Получите положительную оценку и используйте имущество в качестве надёжного обеспечения
          </p>
        </div>
      </div>
    </div>
  )
}