import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './formWhite.scss';

export const FormWhite = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анімація відбудеться тільки один раз
    threshold: 0.1, // поріг видимості елемента (10%)
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [creditAmount, setCreditAmount] = useState('');
  const [ownership, setOwnership] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Валідація імені (мінімум 2 символи)
    if (name.trim().length < 2) {
      newErrors.name = true;
    }

    // Валідація телефону (простий регулярний вираз для перевірки формату)
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phonePattern.test(phone)) {
      newErrors.phone = true;
    }

    // Валідація email (перевірка на правильний формат)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = true;
    }

    // Валідація суми кредиту (тільки число)
    if (isNaN(creditAmount) || creditAmount <= 0) {
      newErrors.creditAmount = true;
    }

    // Валідація вибору з селектора
    if (!ownership) {
      newErrors.ownership = true;
    }

    setErrors(newErrors);

    // Повертаємо true, якщо помилок немає
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Перевіряємо, чи форма валідна
    if (validateForm()) {
      console.log("Форма успішно відправлена", { name, phone, email, creditAmount, ownership });
    } else {
      console.log("Валідація не пройдена");
    }
  };

  return (
    <form
      action=""
      className={`formWhite ${inView ? 'animate' : ''}`}
      ref={ref}
      onSubmit={handleSubmit}
    >
      <h2 className="formWhite__subtitle">
        Не стесняйтесь задавать вопросы, если они у вас есть
      </h2>
      <p className="formWhite__title">Оставьте контактные данные или позвоните нам
        <br />
        <a href="tel:+972533454423" className="formWhite__link">
          053-3454423
        </a>
      </p>
      <div className="formWhite__inputs">
        <div className="formWhite__inputText">
          <div className="formWhite__inputText--half">
            <input
              type="text"
              id="name"
              className={`formWhite__input ${errors.name ? 'formWhite__input--error' : ''}`}
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              id="phone"
              className={`formWhite__input ${errors.phone ? 'formWhite__input--error' : ''}`}
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="formWhite__inputText--half">
            <input
              type="email"
              id="email"
              className={`formWhite__input ${errors.email ? 'formWhite__input--error' : ''}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              id="number"
              className={`formWhite__input ${errors.creditAmount ? 'formWhite__input--error' : ''}`}
              placeholder="Сумма кредита"
              value={creditAmount}
              onChange={(e) => setCreditAmount(e.target.value)}
            />
          </div>
        </div>
        <select
          name="options"
          id="select"
          className={`formWhite__input ${errors.ownership ? 'formWhite__input--error' : ''}`}
          value={ownership}
          onChange={(e) => setOwnership(e.target.value)}
        >
          <option value="" disabled>Вы владеете квартирой?</option>
          <option value="option1">Да</option>
          <option value="option2">Нет</option>
        </select>
        <input
          type="submit"
          id="submit"
          className="formWhite__input formWhite__input--submit"
          value="Отправить"
        />
      </div>
    </form>
  )
}
