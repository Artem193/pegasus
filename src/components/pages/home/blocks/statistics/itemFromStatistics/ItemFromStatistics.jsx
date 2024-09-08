import React, { useState, useEffect } from "react";
import "./itemFromStatistics.scss";

export const ItemFromStatistics = ({ numbers, text, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Перевіряємо, чи значення містить відсоток
    const isPercentage = numbers.includes("%");
    const end = isPercentage ? parseInt(numbers.replace("%", ""), 10) : parseInt(numbers, 10); // Кінцеве значення
    let start = 0; // Початкове значення
    const increment = end / (duration / 10); // Розраховуємо приріст значення

    const timer = setInterval(() => {
      start += increment; // Збільшуємо поточне значення
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [numbers, duration]);

  return (
    <div className="itemFromStatistics">
      <p className="itemFromStatistics__numbers color-yellow">
        {count}
        {numbers.includes("%") ? "%" : ""} {/* Додаємо % тільки якщо було у початковому значенні */}
      </p>
      <p className="itemFromStatistics__text color-yellow">{text}</p>
    </div>
  );
};