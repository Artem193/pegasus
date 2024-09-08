import React from "react";
import { Link } from "react-router-dom";
import './menuItemPhone.scss';

export const MenuItemPhone = ({ page, link }) => {
  return (
    <li className="menuList__item">
      <Link to={link} className="menuList__link">{page}</Link>
    </li>
  )
}
