import React, { useState } from "react";
import { Flipped } from "react-flip-toolkit";
import "./rankingItem.scss";

const RankingItem = ({
  id,
  rank,
  name,
  image,
  isFirstRow,
  points,
  inputValue,
  onInputChange,
}) => {
  const rowClass = isFirstRow
    ? "ranking-item--first-row"
    : "ranking-item--regular-row";

  const handleChange = (event) => {
    const value = event.target.value.trim(); // Remove leading and trailing whitespace
    // Check if value is empty or non-numeric
    if (value === "" || isNaN(value)) {
      onInputChange(0); // Set value to 0 if empty or non-numeric
    } else {
      onInputChange(parseInt(value, 10)); // Otherwise, parse the value as an integer
    }
  };

  return (
    <Flipped flipId={id}>
      <div className={`ranking-item ${rowClass}`}>
        <div className="ranking-item__info-container">
          <span className="ranking-item__rank">{rank}</span>
          <img className="ranking-item__image" src={image} alt={name} />
          <span className="ranking-item__name">{name}</span>
          <span className="ranking-item__points">{points}</span>
        </div>

        <div className="ranking-item__input-container">
          <span className="ranking-item__plus">+</span>
          <input
            type="text"
            className="ranking-item__points-input"
            placeholder="Points"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
    </Flipped>
  );
};

export default RankingItem;
