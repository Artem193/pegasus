import React from "react";
import { Carousel } from "./carousel/Carousel";

import './reviews.scss';

export const Reviews = () => {
  return (
    <div className="reviews">
      <h1 className="reviews__title">
        <span className="color-yellow">Отзывы</span> наших клиентов
      </h1>
      <Carousel />
    </div>
  )
}
