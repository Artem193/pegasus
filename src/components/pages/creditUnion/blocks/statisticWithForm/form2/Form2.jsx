import React, { useState } from "react";
import './form2.scss';

export const Form2 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (name.trim().length < 2) newErrors.name = true;

    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phonePattern.test(phone)) newErrors.phone = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) newErrors.email = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Форма успішно відправлена", { name, phone, email });
      // Очистка полів форми, якщо потрібно
      setName('');
      setPhone('');
      setEmail('');
      setErrors({});
    }
  };

  return (
    <form className="form2" onSubmit={handleSubmit}>
      <div className="page__container">
        <h1 className="form2__title">
          <span className="color-yellow">Пусть наши специалисты</span> <span className="color-white">подберут для вас наилучшие финансовые решения!</span>
        </h1>
        <div className="form2__inputs">
          <input
            type="text"
            id="name"
            className={`form2__input ${errors.name ? 'form2__input--error' : ''}`}
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            id="phone"
            className={`form2__input ${errors.phone ? 'form2__input--error' : ''}`}
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            id="email"
            className={`form2__input ${errors.email ? 'form2__input--error' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="submit"
            id="submit"
            className="form2__input form2__input--submit"
          />
        </div>
      </div>
    </form>
  );
}
