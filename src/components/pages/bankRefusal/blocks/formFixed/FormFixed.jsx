import React, { useState } from 'react';
import './formFixed.scss';

export const FormFixed = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (name.trim().length < 2) newErrors.name = true;

    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phonePattern.test(phone)) newErrors.phone = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) newErrors.email = true;

    if (number.trim() === '' || isNaN(number)) newErrors.number = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Форма успішно відправлена", { name, phone, email, number });
      // Очистка полів форми
      setName('');
      setPhone('');
      setEmail('');
      setNumber('');
      setErrors({});
    }
  };

  return (
    <form action="" className='formFixed' onSubmit={handleSubmit}>
      <p className="formFixed__title">Запросите бесплатную консультацию, заполнив форму ниже или позвоните нам по телефону
        <br />
        <a href="tel:+972533454423" className="formFixed__link">
          053-3454423
        </a>
      </p>
      <div className="formFixed__inputs">
        <div className="formFixed__inputText">
          <div className="formFixed__inputText--half">
            <input
              type="text"
              id="name"
              className={`formFixed__input ${errors.name ? 'formFixed__input--error' : ''}`}
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              id="phone"
              className={`formFixed__input ${errors.phone ? 'formFixed__input--error' : ''}`}
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="formFixed__inputText--half">
            <input
              type="email"
              id="email"
              className={`formFixed__input ${errors.email ? 'formFixed__input--error' : ''}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              id="number"
              className={`formFixed__input ${errors.number ? 'formFixed__input--error' : ''}`}
              placeholder="Сумма кредита"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
  );
}
