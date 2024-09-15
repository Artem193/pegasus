import React from 'react';
import { useInView } from 'react-intersection-observer';
import './formFixed.scss';

export const FormFixed = () => {
  return (
    <form action="" className='formFixed'>
      <p className="formFixed__title">Запросите бесплатную консультацию, заполнив форму ниже или позвоните нам по телефону
        <br />
        <a href="tel:+1 234 555-55-55" className="formFixed__link">
          072-3456789
        </a>
      </p>
      <div className="formFixed__inputs">
        <div className="formFixed__inputText">
          <div className="formFixed__inputText--half">
            <input
              type="text"
              id="name"
              className="formFixed__input"
              placeholder="Имя"
            />
            <input
              type="tel"
              id="phone"
              className="formFixed__input"
              placeholder="Телефон"
            />
          </div>
          <div className="formFixed__inputText--half">
            <input
              type="email"
              id="email"
              className="formFixed__input"
              placeholder="Email"
            />
            <input
              type="number"
              id="number"
              className="formFixed__input"
              placeholder="Сумма кредита"
            />
          </div>
        </div>
        <select
          name="options"
          id="select"
          className="formFixed__input"
        >
          <option value="" disabled selected>Вы владеете квартирой?</option>
          <option value="option1">Да</option>
          <option value="option2">Нет</option>
        </select>
        <input
          type="submit"
          id="submit"
          className="formFixed__input formFixed__input--submit"
        />
      </div>
    </form>
  )
}
