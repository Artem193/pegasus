import React, { useState } from "react";
import { MenuItem } from "./menuItem/MenuItem";
import { MenuItemPhone } from "./menuItemPhone/MenuItemPhone";

import './header.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <button className="header__menu" onClick={toggleMenu}></button>
          <div className="header__items header__items--part1">
            <MenuItem page={'Page1'} link={'/'}/>
            <MenuItem page={'Page2'} link={'/about'}/>
            <MenuItem page={'Page3'} />
          </div>
          <a href="#" className="header__logo"></a>
          <div className="header__items header__items--part2">
            <MenuItem page={'Page4'} />
            <MenuItem page={'Page5'} />
            <MenuItem page={'Page6'} />
            <MenuItem page={'Page7'} />
          </div>
          <div className="header__contacts">
            <a href="#" className="header__icon header__icon--wp"></a>
            <a href="tel:+1 234 555-55-55" className="header__icon header__icon--phone"></a>
          </div>
        </nav>
      </header>
      <ul className={`menuList ${isMenuOpen ? 'menuList--active' : 'menuList--hidden'}`} id="menuList">
        <MenuItemPhone page={'page1'} link={'/'}/>
        <MenuItemPhone page={'page2'} link={'/about'}/>
        <MenuItemPhone page={'page3'}/>
        <MenuItemPhone page={'page4'}/>
        <MenuItemPhone page={'page5'}/>
        <MenuItemPhone page={'page6'}/>
        <MenuItemPhone page={'page7'}/>
        <div className="cross cross--menu" onClick={toggleMenu}></div>
      </ul>
      <a href="tel:+1 234 555-55-55" className="button button--phone">
        <p className="number">072-3456789</p>
      </a>
      <a href="#" className="button button--wp"></a>
      <button className="button button--form" onClick={toggleForm}>
        Записаться на консультацию
      </button>
      <form action="" className={`form ${isFormOpen ? 'form--active' : 'form--hidden'}`}>
        <p className="form__title">Оставьте контактные данные или позвоните нам
          <br />
          <a href="tel:+1 234 555-55-55" className="form__link">
            072-3456789
          </a>
        </p>
        <input
          type="text"
          id="name"
          className="form__input"
          placeholder="Имя"
        />
        <input
          type="tel"
          id="phone"
          className="form__input"
          placeholder="Телефон"
        />
        <input
          type="email"
          id="email"
          className="form__input"
          placeholder="Email"
        />
        <input
          type="number"
          id="number"
          className="form__input"
          placeholder="Сумма кредита"
        />
        <select
          name="options"
          id="select"
          className="form__input"
        >
          <option value="" disabled selected>Вы владеете квартирой?</option>
          <option value="option1">Да</option>
          <option value="option2">Нет</option>
        </select>
        <input
          type="submit"
          id="submit"
          className="form__input form__input--submit"
        />
        <div className="cross" onClick={toggleForm}></div>
      </form>
    </>
  );
};