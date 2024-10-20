import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { MenuItem } from "./menuItem/MenuItem";
import { MenuItemPhone } from "./menuItemPhone/MenuItemPhone";

import './header.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isListOpen2, setIsListOpen2] = useState(false);
  const [isListOpen3, setIsListOpen3] = useState(false);
  const [isListOpen4, setIsListOpen4] = useState(false);

  const menuRef = useRef(null);
  const formRef = useRef(null);
  const listRef1 = useRef(null);
  const listRef2 = useRef(null);
  const listRef3 = useRef(null);
  const listRef4 = useRef(null);

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


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleList = () => {
    setIsListOpen(prevState => {
      // Закриваємо другий список при відкритті першого
      if (!prevState) setIsListOpen2(false);
      return !prevState;
    });
  };

  const toggleList2 = () => {
    setIsListOpen2(prevState => {
      // Закриваємо перший список при відкритті другого
      if (!prevState) setIsListOpen(false);
      return !prevState;
    });
  };

  const toggleList3 = () => {
    setIsListOpen3(prevState => {
      // Закриваємо перший список при відкритті другого
      if (!prevState) setIsListOpen(false);
      return !prevState;
    });
  };

  const toggleList4 = () => {
    setIsListOpen4(prevState => {
      // Закриваємо перший список при відкритті другого
      if (!prevState) setIsListOpen(false);
      return !prevState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Закриття меню при кліку поза межами
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsFormOpen(false);
      }
      // Закриття списків при кліку поза ними
      if (listRef1.current && !listRef1.current.contains(event.target)) {
        setIsListOpen(false);
      }
      if (listRef2.current && !listRef2.current.contains(event.target)) {
        setIsListOpen2(false);
      }
      if (listRef3.current && !listRef3.current.contains(event.target)) {
        setIsListOpen3(false);
      }
      if (listRef4.current && !listRef4.current.contains(event.target)) {
        setIsListOpen4(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, formRef, listRef1, listRef2, listRef3, listRef4]);

  const [currentPage, setCurrentPage] = useState('/');

  const validateForm = () => {
    const newErrors = {};

    // Валідація імені (мінімум 2 символи)
    if (name.trim().length < 2) {
      newErrors.name = true;
    }

    // Валідація телефону (простий регулярний вираз для перевірки формату)
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phonePattern.test(phone) || phone.trim().length < 9) {
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
      <header className="header">
        <nav className="header__nav">
          <button className="header__menu" onClick={toggleMenu}></button>
          <div className="header__items header__items--part1">
            <MenuItem page={'Главная'} link={'/'} active={currentPage === '/'} onClick={() => setCurrentPage('/')} />
            <MenuItem page={'О нас'} link={'/aboutUs'} active={currentPage === '/aboutUs'} onClick={() => setCurrentPage('/aboutUs')} />
            <MenuItem page={'Объединение кредитов'} link={'/creditUnion'} active={currentPage === '/creditUnion'} onClick={() => setCurrentPage('/creditUnion')} />
          </div>
          <Link to="/" className="header__logo"></Link>
          <div className="header__items header__items--part2">
            <div className="header__explanation" ref={listRef1}>
              <div className="header__explanation--act" onClick={toggleList}>
                <p className="item">Обратная ипотека</p>
                <span className={`header__explanation--icon ${isListOpen ? 'open' : ''}`}>
                  ▼
                </span>
              </div>
              {isListOpen && (
                <div className="header__explanation--dropdown">
                  <ul className="header__explanation--list">
                    <li className="header__explanation--item">
                      <MenuItem page={'Обратная ипотека'} link={'/reverseMortgage'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Таблица обратной ипотеки'} link={'/tableReverseMortgage'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Калькулятор обратной ипотеки'} link={'/calculateReverseMortgage'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Сравнение обратной ипотеки'} link={'/mortgageComparison'} />
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="header__explanation" ref={listRef2}>
              <div className="header__explanation--act" onClick={toggleList2}>
                <p className="item">Наши услуги</p>
                <span className={`header__explanation--icon ${isListOpen2 ? 'open' : ''}`}>
                  ▼
                </span>
              </div>
              {isListOpen2 && (
                <div className="header__explanation--dropdown">
                  <ul className="header__explanation--list">
                    <li className="header__explanation--item">
                      <MenuItem page={'Как получить ипотеку, если банк отказал'} link={'/bankRefusal'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Калькулятор машканты'} link={'/calculateMortgage'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Машканта после отказа'} link={'/mortgageForRefuseniks'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Объединение кредитов'} link={'/creditUnion'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Ипотека для тех, кто получил отказ в Израиле'} link={'/refuseniksInIsrael'} />
                    </li>
                    <li className="header__explanation--item">
                      <MenuItem page={'Экспертная информация'} link={'/expertsInfo'} />
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <MenuItem page={'Контакты'} link={'/contacts'} />
          </div>
          <div className="header__contacts">
            <a
              href="https://wa.me/972545991090"
              className="header__icon header__icon--wp"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="tel:+972545991090"
              className="header__icon header__icon--phone"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </nav>
      </header>
      <ul className={`menuList ${isMenuOpen ? 'menuList--active' : 'menuList--hidden'}`} id="menuList">
        <MenuItemPhone page={'Главная'} link={'/'} />
        <MenuItemPhone page={'О нас'} link={'/aboutUs'} />
        <MenuItemPhone page={'Объединение кредитов'} link={'/creditUnion'} />
        <div className={`header__explanation ${isListOpen3 ? 'header__explanation--open' : ''}`} ref={listRef3}>
          <div className="header__explanation--act" onClick={toggleList3}>
            <MenuItemPhone
              page={'Обратная ипотека'}
            />
            <span className={`header__explanation--icon ${isListOpen3 ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          {isListOpen3 && (
            <div className="header__explanation--dropdown">
              <ul className="header__explanation--list">
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Обратная ипотека'} link={'/reverseMortgage'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Таблица обратной ипотеки'} link={'/tableReverseMortgage'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Калькулятор обратной ипотеки'} link={'/calculateReverseMortgage'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Сравнение обратной ипотеки'} link={'/mortgageComparison'} />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={`header__explanation ${isListOpen4 ? 'header__explanation--open' : ''}`} ref={listRef4}>
          <div className="header__explanation--act" onClick={toggleList4}>
            <MenuItemPhone
              page={'Наши услуги'}
            />
            <span className={`header__explanation--icon ${isListOpen4 ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          {isListOpen4 && (
            <div className="header__explanation--dropdown">
              <ul className="header__explanation--list">
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Как получить ипотеку, если банк отказал'} link={'/bankRefusal'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Калькулятор машканты'} link={'/calculateMortgage'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Машканта после отказа'} link={'/mortgageForRefuseniks'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Объединение кредитов'} link={'/creditUnion'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Ипотека для тех, кто получил отказ в Израиле'} link={'/refuseniksInIsrael'} />
                </li>
                <li className="header__explanation--item">
                  <MenuItemPhone page={'Экспертная информация'} link={'/expertsInfo'} />
                </li>
              </ul>
            </div>
          )}
        </div>
        <MenuItemPhone page={'Контакты'} link={'/contacts'} />
        <div className="cross cross--menu" onClick={toggleMenu}></div>
      </ul>
      <a
        href="tel:+972545991090"
        className="button button--phone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="number">053-5991090</p>
      </a>
      {/* <a href="#" className="button button--wp"></a> */}
      <button className="button button--form" onClick={toggleForm}>
        Записаться на консультацию
      </button>
      <form action="" className={`form ${isFormOpen ? 'form--active' : 'form--hidden'}`} ref={formRef} onSubmit={handleSubmit}>
        <p className="form__title">
          Оставьте контактные данные или позвоните нам
          <br />
          <a
            href="tel:+972535991090"
            className="form__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            053-5991090
          </a>
        </p>

        <input
          type="text"
          id="name"
          className={`form__input ${errors.name ? 'form__input--error' : ''}`}
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          id="phone"
          className={`form__input ${errors.phone ? 'form__input--error' : ''}`}
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          id="email"
          className={`form__input ${errors.email ? 'form__input--error' : ''}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          id="number"
          className={`form__input ${errors.creditAmount ? 'form__input--error' : ''}`}
          placeholder="Сумма кредита"
          value={creditAmount}
          onChange={(e) => setCreditAmount(e.target.value)}
        />

        <select
          name="options"
          id="select"
          className={`form__input ${errors.ownership ? 'form__input--error' : ''}`}
          value={ownership}
          onChange={(e) => setOwnership(e.target.value)}
        >
          <option value="" disabled>Вы владеете квартирой?</option>
          <option value="Да">Да</option>
          <option value="Нет">Нет</option>
        </select>

        <button type="submit" className="form__input form__input--submit">Отправить</button>

        <div className="cross" onClick={toggleForm}></div>
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
};
