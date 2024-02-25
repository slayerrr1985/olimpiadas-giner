import React from "react";
import { Flipped } from "react-flip-toolkit";
import "./mascotsListItem.scss";

const MascotsListItem = ({ id, name, inputValue, onInputChange }) => {
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
      <div className="mascots-list-item">
        <span className="mascots-list-item__name">{name}</span>
        <input
          type="text"
          className="mascots-list-item__input"
          placeholder="0"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </Flipped>
  );
};

export default MascotsListItem;
