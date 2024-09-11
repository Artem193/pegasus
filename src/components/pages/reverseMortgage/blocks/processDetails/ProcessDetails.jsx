import React from "react";
import './processDetails.scss';

export const ProcessDetails = () => {
  return (
    <div className="processDetails">
      <h1 className="processDetails__title">
        Процесс в деталях
      </h1>
      <div className="processDetails__stages">
        <div className="processDetails__stage">
          <div className="processDetails__img processDetails__img--1"></div>
          <h2 className="processDetails__subtitle">Квалифицированная консультация</h2>
          <p className="processDetails__text">
            Квалифицированная консультация — начальный и важный этап процесса получения обратной ипотеки
          </p>
        </div>
        <div className="processDetails__stage">
          <div className="processDetails__img processDetails__img--2"></div>
          <h2 className="processDetails__subtitle">Выбор финансового партнера</h2>
          <p className="processDetails__text">
            Выбор между различными финансовыми учреждениями — банками или страховыми компаниями
          </p>
        </div>
        <div className="processDetails__stage">
          <div className="processDetails__img processDetails__img--3"></div>
          <h2 className="processDetails__subtitle">Анализ и оценка</h2>
          <p className="processDetails__text">
            Оценщик недвижимости, представляющий финансовое учреждение, проведет осмотр объекта и составит детализированный отчет
          </p>
        </div>
        <div className="processDetails__stage">
          <div className="processDetails__img processDetails__img--4"></div>
          <h2 className="processDetails__subtitle">
            Отправка запроса
          </h2>
          <p className="processDetails__text">
            Подача заявления включает оплату пошлины за открытие дела, административные сборы, юридическую консультацию и услуги оценщика
          </p>
        </div>
        <div className="processDetails__stage">
          <div className="processDetails__img processDetails__img--5"></div>
          <h2 className="processDetails__subtitle">
            Определение пути
          </h2>
          <p className="processDetails__text">
            Доступны несколько вариантов погашения: отсутствие ежемесячных платежей с полной выплатой в конце срока, оплата только процентов с погашением основной суммы по завершении периода, либо ежемесячные выплаты, включающие основную сумму и проценты
          </p>
        </div>
      </div>
    </div>
  )
}
