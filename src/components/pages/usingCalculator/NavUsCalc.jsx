import React from "react";

export const NavUsCalc = ({ titles }) => {
  return (
    <div className="usingCalculator__nav">
      {titles.map((title) =>
        <ul className="usingCalculator__list">
          <li className="usingCalculator__item">
            <a href={title.id} className="usingCalculator__item">
              {title.title}
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

