import React, { useState } from "react";
import './formGreenBigger.scss';

export const FormGreenBigger = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
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

    setErrors(newErrors);

    // Повертаємо true, якщо помилок немає
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Перевіряємо, чи форма валідна
    if (validateForm()) {
      console.log("Форма успішно відправлена", { name, phone, email });
    } else {
      console.log("Валідація не пройдена");
    }
  };

  return (
    <form className="formGreenBigger" onSubmit={handleSubmit}>
      <div className="page__container">
        <h1 className="formGreenBigger__title">
          <span className="color-yellow">Пусть наши специалисты подберут для вас наилучшие финансовые решения!</span>
        </h1>
        <h2 className="formGreenBigger__subtitle">
          Заполните форму, и наш специалист свяжется с вами в кратчайшие сроки
        </h2>
        <div className="formGreenBigger__inputs">
          <input
            type="text"
            id="name"
            className={`formGreenBigger__input ${errors.name ? 'formGreenBigger__input--error' : ''}`}
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            id="phone"
            className={`formGreenBigger__input ${errors.phone ? 'formGreenBigger__input--error' : ''}`}
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            id="email"
            className={`formGreenBigger__input ${errors.email ? 'formGreenBigger__input--error' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="submit"
            id="submit"
            className="formGreenBigger__input formGreenBigger__input--submit"
            value="Отправить"
          />
        </div>
      </div>
    </form>
  );
};
