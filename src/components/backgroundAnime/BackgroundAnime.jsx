import React, { useEffect, useState } from "react";
import image1 from '../../images/basic1.png';
import image2 from '../../images/basic2.png';
import './backgroundAnime.scss';

export const BackgroundAnime = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const images = [image1, image2];

    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      <div
        className="background__content"
        style={{ backgroundImage: `url(${imageIndex === 0 ? image1 : image2})` }}
      />
      <div className="textContent">
        <h1 className="textContent__title">Pegasus</h1>
        <h2 className="textContent__text">
          Решения в сфере финансов&nbsp;
          <span className="textContent__text textContent__text--mod">
            — ипотека и кредиты для клиентов с отказами
          </span>
        </h2>
      </div>
    </div>
  );
};