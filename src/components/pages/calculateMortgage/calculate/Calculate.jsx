import React from "react";
import { useState } from "react";
import './calculate.scss';

export const Calculate = () => {
  const [price, setPrice] = useState('');
  const [capital, setCapital] = useState('');
  const [duration, setDuration] = useState('');
  const [percent, setPercent] = useState(3);
  const [income, setIncome] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState({
    maxPayment: 0,
    monthlyPayment: 0,
    sumMortgage: 0
  });

  const handleCalculate = (e) => {
    e.preventDefault();

    if (price && capital < price * 0.25) {
      setError('Минимальный первоначальный взнос 25% от стоимость объекта недвижимости');
      return;
    }

    setError('');

    const maxPayment = income * 0.4;
    const sumMortgage = price - capital;

    const percentRate = percent / 1200;
    const durationMonths = duration * 12;
    const monthlyPayment = Math.round(sumMortgage * percentRate / (1 - (1 + percentRate) ** -durationMonths));

    setResults({
      maxPayment,
      monthlyPayment: monthlyPayment || 0,
      sumMortgage
    });
  };

  return (
    <form className="calculate">
      <div className="calculate__inputDate">
        <h1 className="calculate__title">Калькулятор Машканты</h1>
        <label htmlFor="1" className="calculate__subtitle">
          Стоимость объекта недвижимости(₪):
        </label>
        <input
          type="number"
          name="price"
          id="1"
          value={price}
          onChange={(e) => {
            const value = e.target.value === '' ? '' : Number(e.target.value);
            setPrice(value);
          }}
          placeholder="0"
          required
          className="calculate__input"
        />
        <label htmlFor="2" className="calculate__subtitle">Первоначальный взнос(₪): </label>
        <p className="calculate__error">
          Минимальный первоначальный взнос 25% от стоимость объекта недвижимости
        </p>
        <input
          type="number"
          name="capital"
          id="2"
          value={capital}
          onChange={(e) => {
            const value = e.target.value === '' ? '' : Number(e.target.value);
            setCapital(value);
          }}
          placeholder="0"
          required
          className="calculate__input"
        />
        {error && <p className="calculate__error">{error}</p>}
        <label htmlFor="3" className="calculate__subtitle">Длительность(лет): </label>
        <input
          type="number"
          name="duration"
          id="3"
          value={duration}
          onChange={(e) => {
            const value = e.target.value === '' ? '' : Number(e.target.value);
            setDuration(value);
          }}
          placeholder="0"
          required
          className="calculate__input"
        />
        <label htmlFor="4" className="calculate__subtitle">Ежегодная процентная ставка: {percent}%</label>
        <input
          type="range"
          min="3"
          max="5.5"
          step="0.01"
          name="percent"
          id="4"
          value={percent}
          onChange={(e) => {
            const value = e.target.value === '' ? '' : Number(e.target.value);
            setPercent(value);
          }}
          className="calculate__inputSlider"
        />
        <label htmlFor="5" className="calculate__subtitle">Доход(₪): </label>
        <input
          type="number"
          name="income"
          id="5"
          value={income}
          onChange={(e) => {
            const value = e.target.value === '' ? '' : Number(e.target.value);
            setIncome(value);
          }}
          required
          placeholder="0"
          className="calculate__input"
        />

        <button
          onClick={handleCalculate}
          className="calculate__button"
          disabled={!price || capital < price / 4 || capital > price || !duration}
        >
          Рассчитать
        </button>
      </div>

      <div className="calculate__results">
        <h1 className="calculate__title">Расчет финансовой способности</h1>
        <p className="calculate__subtitle">Максимальная сумма погашения машканты в зависимости от дохода: <span className="calculate__result">{results.maxPayment}</span></p>
        <p className="calculate__subtitle">Минимальный ежемесячный платеж: <span className="calculate__result">{results.monthlyPayment}</span></p>
        <p className="calculate__subtitle">Сумма машканты: <span className="calculate__result">{results.sumMortgage}</span></p>
        <p className="calculate__subtitle">
          Детальная консультация по вопросам машканты!
        </p>
        <button className="calculate__button">Получить бесплатно</button>
      </div>
    </form>
  );
}