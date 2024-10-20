import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './formReverseMashkanta.scss';

export const FormReverseMashkanta = () => {
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

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <form
        action=""
        className={`formReverseMashkanta ${inView ? 'animate' : ''}`}
        ref={ref}
        onSubmit={handleSubmit}
      >
        <h2 className="formReverseMashkanta__subtitle">
          Получите бесплатную профессиональную консультацию
        </h2>
        <p className="formReverseMashkanta__title">Оставьте контактные данные или позвоните нам
          <br />
          <a href="tel:+972545991090" className="formReverseMashkanta__link">
            054-5991090
          </a>
        </p>
        <div className="formReverseMashkanta__inputs">
          <div className="formReverseMashkanta__inputText">
            <div className="formReverseMashkanta__inputText--half">
              <input
                type="text"
                id="name"
                className={`formReverseMashkanta__input ${errors.name ? 'formReverseMashkanta__input--error' : ''}`}
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                id="phone"
                className={`formReverseMashkanta__input ${errors.phone ? 'formReverseMashkanta__input--error' : ''}`}
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="formReverseMashkanta__inputText--half">
              <input
                type="email"
                id="email"
                className={`formReverseMashkanta__input ${errors.email ? 'formReverseMashkanta__input--error' : ''}`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                id="number"
                className={`formReverseMashkanta__input ${errors.creditAmount ? 'formReverseMashkanta__input--error' : ''}`}
                placeholder="Сумма кредита"
                value={creditAmount}
                onChange={(e) => setCreditAmount(e.target.value)}
              />
            </div>
          </div>
          <select
            name="options"
            id="select"
            className={`formReverseMashkanta__input ${errors.ownership ? 'formReverseMashkanta__input--error' : ''}`}
            value={ownership}
            onChange={(e) => setOwnership(e.target.value)}
          >
            <option value="" disabled>Вы владеете квартирой?</option>
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>
          <input
            type="submit"
            id="submit"
            className="formReverseMashkanta__input formReverseMashkanta__input--submit"
            value="Отправить"
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
  )
}
