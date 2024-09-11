import React from 'react';
import { useInView } from 'react-intersection-observer';
import './formReverseMashkanta.scss';

export const FormReverseMashkanta = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анімація відбудеться тільки один раз
    threshold: 0.1, // поріг видимості елемента (10%)
  });

  return (
    <form
      action=""
      className={`formReverseMashkanta ${inView ? 'animate' : ''}`}
      ref={ref}
    >
      <h2 className="formReverseMashkanta__subtitle">
        Получите бесплатную профессиональную консультацию
      </h2>
      <p className="formReverseMashkanta__title">Оставьте контактные данные или позвоните нам
        <br />
        <a href="tel:+1 234 555-55-55" className="formReverseMashkanta__link">
          072-3456789
        </a>
      </p>
      <div className="formReverseMashkanta__inputs">
        <div className="formReverseMashkanta__inputText">
          <div className="formReverseMashkanta__inputText--half">
            <input
              type="text"
              id="name"
              className="formReverseMashkanta__input"
              placeholder="Имя"
            />
            <input
              type="tel"
              id="phone"
              className="formReverseMashkanta__input"
              placeholder="Телефон"
            />
          </div>
          <div className="formReverseMashkanta__inputText--half">
            <input
              type="email"
              id="email"
              className="formReverseMashkanta__input"
              placeholder="Email"
            />
            <input
              type="number"
              id="number"
              className="formReverseMashkanta__input"
              placeholder="Сумма кредита"
            />
          </div>
        </div>
        <select
          name="options"
          id="select"
          className="formReverseMashkanta__input"
        >
          <option value="" disabled selected>Вы владеете квартирой?</option>
          <option value="option1">Да</option>
          <option value="option2">Нет</option>
        </select>
        <input
          type="submit"
          id="submit"
          className="formReverseMashkanta__input formReverseMashkanta__input--submit"
        />
      </div>
    </form>
  )
}
