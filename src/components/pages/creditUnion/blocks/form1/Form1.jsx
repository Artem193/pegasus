import React, { useState } from "react";
import './form1.scss'

export const Form1 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (name.trim().length < 2) newErrors.name = 'Имя должно содержать минимум 2 символа';
    
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phonePattern.test(phone)) newErrors.phone = 'Введите корректный номер телефона';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) newErrors.email = 'Введите корректный email';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Форма успешно отправлена", { name, phone, email });
    } else {
      console.log("Ошибка валидации");
    }
  };

  return (
    <form className="form1" onSubmit={handleSubmit}>
      <div className="page__container">
        <h1 className="form1__title">
          <span className="color-yellow">Оставьте свой номер</span> <span className="color-white">телефона, чтобы получить бесплатную консультацию!</span>
        </h1>
        <div className="form1__inputs">
          <input
            type="text"
            id="name"
            className={`form1__input ${errors.name ? 'form1__input--error' : ''}`}
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            id="phone"
            className={`form1__input ${errors.phone ? 'form1__input--error' : ''}`}
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            id="email"
            className={`form1__input ${errors.email ? 'form1__input--error' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="submit"
            id="submit"
            className="form1__input form1__input--submit"
          />
        </div>
      </div>
    </form>
  );
}
