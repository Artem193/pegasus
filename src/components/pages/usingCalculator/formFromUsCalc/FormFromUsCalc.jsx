import React, { useState } from 'react';
import './formFromUsCalc.scss';

export const FormFromUsCalc = () => {
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
    <form action="" className='formFromUsCalc' onSubmit={handleSubmit}>
      <p className="formFromUsCalc__title">Запросите бесплатную консультацию, заполнив форму ниже или позвоните нам по телефону
        <br />
        <a href="tel:+1 234 555-55-55" className="formFromUsCalc__link">
          072-3456789
        </a>
      </p>
      <div className="formFromUsCalc__inputs">
        <div className="formFromUsCalc__inputText">
          <div className="formFromUsCalc__inputText--half">
            <input
              type="text"
              id="name"
              className={`formFromUsCalc__input ${errors.name ? 'formFromUsCalc__input--error' : ''}`}
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              id="phone"
              className={`formFromUsCalc__input ${errors.phone ? 'formFromUsCalc__input--error' : ''}`}
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="formFromUsCalc__inputText--half">
            <input
              type="email"
              id="email"
              className={`formFromUsCalc__input ${errors.email ? 'formFromUsCalc__input--error' : ''}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              id="number"
              className={`formFromUsCalc__input ${errors.number ? 'formFromUsCalc__input--error' : ''}`}
              placeholder="Сумма кредита"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <select
          name="options"
          id="select"
          className="formFromUsCalc__input"
        >
          <option value="" disabled selected>Вы владеете квартирой?</option>
          <option value="option1">Да</option>
          <option value="option2">Нет</option>
        </select>
        <input
          type="submit"
          id="submit"
          className="formFromUsCalc__input formFromUsCalc__input--submit"
        />
      </div>
    </form>
  );
}
