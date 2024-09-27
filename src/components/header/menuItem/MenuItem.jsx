import React from "react";
import './menuItem.scss';
import { NavLink } from "react-router-dom";

export const MenuItem = ({ page, link }) => {
  return (
    <NavLink to={link} className="item" activeClassName='dhfdfx'>
      {page}
    </NavLink>
  );
};
