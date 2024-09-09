import React, { useState, useEffect } from "react";
import "./itemFromStatistics.scss";

export const ItemFromStatistics = ({ numbers, text, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isPercentage = numbers.includes("%");
    const end = isPercentage ? parseInt(numbers.replace("%", ""), 10) : parseInt(numbers, 10);
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
  }, [numbers, duration]);

  return (
    <div className="itemFromStatistics">
      <p className="itemFromStatistics__numbers color-yellow">
        {count}
        {numbers.includes("%") ? "%" : ""}
      </p>
      <p className="itemFromStatistics__text color-yellow">{text}</p>
    </div>
  );
};
