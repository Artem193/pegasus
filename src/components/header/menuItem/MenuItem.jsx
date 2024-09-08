import React from "react";
import './menuItem.scss';
import { Link } from "react-router-dom";

export const MenuItem = ({ page, link }) => {
  return (
    <Link to={link} className="item">{page}</Link>
  )
}
