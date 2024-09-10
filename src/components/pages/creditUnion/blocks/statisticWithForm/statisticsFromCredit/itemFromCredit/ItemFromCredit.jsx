import React, { useState, useEffect, useRef } from "react";
import "./itemFromCredit.scss";

export const ItemFromCredit = ({ numbers, text, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Зупиняємо відстеження після того, як компонент став видимим
        }
      },
      { threshold: 0.1 } // Запускає анімацію, коли 10% елементу у видимій частині екрану
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Запускаємо підрахунок лише, якщо компонент видимий

    const isPercentage = numbers.includes("%");
    const end = isPercentage
      ? parseInt(numbers.replace("%", ""), 10)
      : parseInt(numbers, 10);
    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [isVisible, numbers, duration]);

  return (
    <div className="itemFromCredit" ref={ref}>
      <p className="itemFromCredit__numbers color-yellow">
        {count}
        {numbers.includes("%") ? "%" : ""}
      </p>
      <p className="itemFromCredit__text color-yellow">{text}</p>
    </div>
  );
};
