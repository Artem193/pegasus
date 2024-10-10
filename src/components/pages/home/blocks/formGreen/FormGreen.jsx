import React, { useState } from "react";
import './formGreen.scss'

export const FormGreen = () => {
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
      // Якщо валідація пройшла успішно, відправляємо форму (можна додати логіку відправки)
      console.log("Форма успішно відправлена");
      console.log({ name, phone, email });
    } else {
      console.log("Валідація не пройдена");
    }
  };

  return (
    <form className="formGreen" onSubmit={handleSubmit}>
      <div className="page__container">
        <h1 className="formGreen__title">
          <span className="color-yellow">Пусть наши специалисты</span>{" "}
          <span className="color-white">подберут для вас наилучшие финансовые решения!</span>
        </h1>
        <div className="formGreen__inputs">
          <input
            type="text"
            id="name"
            className={`formGreen__input ${errors.name ? 'formGreen__input--error' : ''}`}
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="formGreen__error">{errors.name}</p>}

          <input
            type="tel"
            id="phone"
            className={`formGreen__input ${errors.phone ? 'formGreen__input--error' : ''}`}
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <p className="formGreen__error">{errors.phone}</p>}

          <input
            type="email"
            id="email"
            className={`formGreen__input ${errors.email ? 'formGreen__input--error' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="formGreen__error">{errors.email}</p>}

          <input
            type="submit"
            id="submit"
            className="formGreen__input formGreen__input--submit"
            value="Отправить"
          />
        </div>
      </div>
    </form>
  )
}