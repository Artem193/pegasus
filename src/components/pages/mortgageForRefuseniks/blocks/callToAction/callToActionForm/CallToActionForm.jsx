import React, { useState } from 'react';
import './callToActionForm.scss';

export const CallToActionForm = () => {
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
    <form action="" className='callToActionForm' onSubmit={handleSubmit}>
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
              className={`callToActionForm__input ${errors.name ? 'callToActionForm__input--error' : ''}`}
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              id="phone"
              className={`callToActionForm__input ${errors.phone ? 'callToActionForm__input--error' : ''}`}
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="callToActionForm__inputText--half">
            <input
              type="email"
              id="email"
              className={`callToActionForm__input ${errors.email ? 'callToActionForm__input--error' : ''}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              id="number"
              className={`callToActionForm__input ${errors.number ? 'callToActionForm__input--error' : ''}`}
              placeholder="Сумма кредита"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
  );
}
