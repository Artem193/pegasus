import React, { useRef, useState, useEffect } from 'react';
import './carousel.scss';
import photo1 from '../../../../../../images/basic1.png';

const reviews = [
  {
    id: 6,
    name: 'Charlie Wilson',
    text: 'Exceeded my expectations.',
    photo: photo1,
  },
  {
    id: 1,
    name: 'John Doe',
    text: 'This is an amazing product!',
    photo: photo1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'I am very satisfied with my purchase.',
    photo: photo1,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    text: 'Highly recommend to everyone!',
    photo: photo1,
  },
  {
    id: 4,
    name: 'Bob Brown',
    text: 'Great quality and service.',
    photo: photo1,
  },
  {
    id: 5,
    name: 'Eve Davis',
    text: 'Will buy again for sure.',
    photo: photo1,
  },
  {
    id: 6,
    name: 'Charlie Wilson',
    text: 'Exceeded my expectations.',
    photo: photo1,
  },
  {
    id: 1,
    name: 'John Doe',
    text: 'This is an amazing product!',
    photo: photo1,
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextClick = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(reviews.length - 2);
      }, 300);
    } else if (currentIndex === reviews.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 300);
    }
  }, [currentIndex, reviews.length]);

  const calculateTranslateX = () => {
    const visibleCount = window.innerWidth < 1024 ? 1 : 3;
    return -((currentIndex - 1) * (100 / visibleCount)) + '%';
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="carousel__track-container" ref={carouselRef}>
        <div
          className="carousel__track"
          style={{
            transform: `translateX(${calculateTranslateX()})`,
            transition: transition ? 'transform 0.3s ease-in-out' : 'none',
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`reviews__review ${
                index === currentIndex ? 'reviews__review--active' : ''
              }`}
            >
              <img src={review.photo} alt={`${review.name}'s photo`} className="reviews__photo" />
              <div className="reviews__content">
                <h3 className="reviews__name">{review.name}</h3>
                <p className="reviews__text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel__button carousel__button--next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};
