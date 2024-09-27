import React from "react";
import { Link } from "react-router-dom";

import './articles.scss';

export const Articles = ({ articles, title, articleClass }) => {
  return (
    <div className="articles">
      <h1 className="articles__title"> {title} </h1>
      <div className="articles__types">
        {articles.map((article) => (
          <div className={`articles__article ${articleClass}`} key={article.id}>
            <img
              src={article.img}
              alt="photo"
              className="articles__photo"
            />
            <h2 className="articles__subtitle">
              {article.subtitle}
            </h2>
            <p className="articles__text">
              {article.text}
            </p>
            <Link to={article.linkTo} className="articles__link">
              {article.link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
