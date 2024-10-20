import React, { useState } from 'react';
import './formFromUsCalc.scss';

export const FormFromUsCalc = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [creditAmount, setCreditAmount] = useState('');
  const [ownership, setOwnership] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Лид отправлен успешно", { name, phone, email, creditAmount, ownership });
    } else {
      return;
    }

    const formData = {
      name,
      phone,
      email,
      creditAmount,
      ownership,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsModalVisible(true);
      } else {
        alert('Ошибка при отправлении');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setName('');
    setPhone('');
    setEmail('');
    setCreditAmount('');
    setOwnership('');
  }

  const validateForm = () => {
    const newErrors = {};
    if (name.trim().length < 2) newErrors.name = true;

    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phonePattern.test(phone)) newErrors.phone = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) newErrors.email = true;

    if (isNaN(creditAmount) || creditAmount <= 0) {
      newErrors.creditAmount = true;
    }

    // Валідація вибору з селектора
    if (!ownership) {
      newErrors.ownership = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <form action="" className='formFromUsCalc' onSubmit={handleSubmit}>
        <p className="formFromUsCalc__title">Запросите бесплатную консультацию, заполнив форму ниже или позвоните нам по телефону
          <br />
          <a href="tel:+972545991090" className="formFromUsCalc__link">
            054-5991090
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
                className={`formFromUsCalc__input ${errors.creditAmount ? 'formFromUsCalc__input--error' : ''}`}
                placeholder="Сумма кредита"
                value={creditAmount}
                onChange={(e) => setCreditAmount(e.target.value)}
              />
            </div>
          </div>
          <select
            name="options"
            id="select"
            className={`formFromUsCalc__input ${errors.ownership ? 'formFromUsCalc__input--error' : ''}`}
            value={ownership}
            onChange={(e) => setOwnership(e.target.value)}
          >
            <option value="" disabled selected>Вы владеете квартирой?</option>
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>
          <input
            type="submit"
            id="submit"
            className="formFromUsCalc__input formFromUsCalc__input--submit"
          />
        </div>
      </form>

      {isModalVisible && (
        <div className="modal">
          <div className="modal__content">
            <p>Спасибо! Данные отправлены, мы свяжемся с Вами в ближайшее время!</p>
            <button onClick={closeModal} className="modal__close-button">Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
}
