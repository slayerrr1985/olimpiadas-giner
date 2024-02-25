import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import mascotsData from "./mascotsData";
// import "./animatedRanking.scss";
import RankingItem from "./components/RankingItem/RankingItem";
import MascotsListItem from "./components/MascotsListItem/MascotsListItem";

const AnimatedRanking = () => {
  const [ranking, setRanking] = useState(mascotsData);
  const [mascotsList, setMascotslist] = useState(mascotsData);

  const [inputs, setInputs] = useState(Array(ranking.length).fill(0));

  const sortByPoints = () => {
    const sorted = [...ranking].sort((a, b) => b.points - a.points);
    setRanking(sorted);
  };

  const updateMascotsListSortedById = () => {
    const sorted = [...ranking].sort((a, b) => a.id - b.id);
    setMascotslist(sorted);
  };

  const shuffleRanking = () => {
    const newRanking = [...ranking].sort(() => Math.random() - 0.5);
    setRanking(newRanking);
  };

  const sumPoints = () => {
    const updatedRanking = ranking.map((item, index) => ({
      ...item,
      points: item.points + inputs[index],
    }));
    setRanking(updatedRanking);
    setInputs(Array(ranking.length).fill(0));
    updateMascotsListSortedById();
  };

  const handleInputChange = (index, value) => {
    console.log("value", value);

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="animated-ranking">
      <Flipper
        className="ranking-container"
        flipKey={ranking.map((item) => item.id).join(",")}
      >
        {ranking.map((item, index) => (
          <RankingItem
            key={item.id}
            id={item.id}
            rank={index + 1}
            name={item.name}
            points={item.points}
            image={item.image}
            isFirstRow={index < 1}
            inputValue={inputs[index]}
            onInputChange={(value) => handleInputChange(index, value)}
          />
        ))}
      </Flipper>

      <div className="mascots-list-container">
        {mascotsList.map((item) => {
          const indexInRanking = ranking.findIndex(
            (rankingItem) => rankingItem.id === item.id
          );
          const inputValue =
            indexInRanking !== -1 ? inputs[indexInRanking] : ""; // Set input value based on index in ranking
          return (
            <MascotsListItem
              key={item.id}
              id={item.id}
              name={item.name}
              inputValue={inputValue}
              onInputChange={(value) =>
                handleInputChange(indexInRanking, value)
              }
            />
          );
        })}
      </div>

      <div className="actions-container">
        <button onClick={shuffleRanking}>Shuffle Ranking</button>
        <button onClick={sortByPoints}>Sort by Points</button>
        <button onClick={sumPoints}>Sum Points</button>
      </div>
    </div>
  );
};

export default AnimatedRanking;
