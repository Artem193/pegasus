import React from 'react';
import './callToActionForm.scss';

export const CallToActionForm = () => {
  return (
    <form action="" className='callToActionForm'>
      <p className="callToActionForm__title">Запросите бесплатную консультацию, заполнив форму ниже или позвоните нам по телефону
        <br />
        <a href="tel:+1 234 555-55-55" className="callToActionForm__link">
          072-3456789
        </a>
      </p>
      <div className="callToActionForm__inputs">
        <div className="callToActionForm__inputText">
          <div className="callToActionForm__inputText--half">
            <input
              type="text"
              id="name"
              className="callToActionForm__input"
              placeholder="Имя"
            />
            <input
              type="tel"
              id="phone"
              className="callToActionForm__input"
              placeholder="Телефон"
            />
          </div>
          <div className="callToActionForm__inputText--half">
            <input
              type="email"
              id="email"
              className="callToActionForm__input"
              placeholder="Email"
            />
            <input
              type="number"
              id="number"
              className="callToActionForm__input"
              placeholder="Сумма кредита"
            />
          </div>
        </div>
        <select
          name="options"
          id="select"
          className="callToActionForm__input"
        >
          <option value="" disabled selected>Вы владеете квартирой?</option>
          <option value="option1">Да</option>
          <option value="option2">Нет</option>
        </select>
        <input
          type="submit"
          id="submit"
          className="callToActionForm__input callToActionForm__input--submit"
        />
      </div>
    </form>
  )
}
