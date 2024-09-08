import React from "react";
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="page__container">
        <div className="footer__content">
          <div className="footer__logo">
            <div className="footer__logo--img"></div>
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
                <a href="tel:+1 234 555-55-55" className="footer__contact--link">
                  Телефон: **********
                </a>
              </li>
              <li className="footer__contact">
                <a href="tel:+1 234 555-55-55" className="footer__contact--link">
                  Факс: ************
                </a>
              </li>
              <li className="footer__contact">
                <a href="mailto:" className="footer__contact--link">
                  Электронная почта: ********
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
