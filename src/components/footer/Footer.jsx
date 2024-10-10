import React from "react";
import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="page__container">
        <div className="footer__content">
          <div className="footer__logo">
            <Link to="/" className="footer__logo--img"></Link>
            <h1 className="footer__logo--title">Pegasus</h1>
          </div>
          <div className="footer__contacts">
            <h1 className="footer__contacts--title">Ашкелон</h1>
            <ul className="footer__contacts--list">
              <li className="footer__contact">
                <a href="#" className="footer__contact--link">
                  Адрес: ********
                </a>
              </li>
              <li className="footer__contact">
                <a
                  href="tel:+972533454423"
                  className="footer__contact--link"
                >
                  Телефон: 053-3454423
                </a>
              </li>
              <li className="footer__contact">
                <a
                  href="mailto: mortgagespegasus@gmail.com"
                  className="footer__contact--link"
                >
                  Электронная почта: mortgagespegasus@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        © 2024 Pegasus. Все права защищены.
      </p>
    </footer>
  )
}