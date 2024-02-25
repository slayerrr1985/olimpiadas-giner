import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flipper } from "react-flip-toolkit";
import mascotsData from "./mascotsData";
import RankingItem from "./components/RankingItem/RankingItem";
import MascotsListItem from "./components/MascotsListItem/MascotsListItem";
import RingsImg from "../../assets/rings.svg";
import "./animatedRanking.scss";

const AnimatedRanking = () => {
  const [ranking, setRanking] = useState(mascotsData);
  const [inputs, setInputs] = useState(Array(ranking.length).fill(0));

  //   const sortByPoints = () => {
  //     const sorted = [...ranking].sort((a, b) => b.points - a.points);
  //     setRanking(sorted);
  //     console.log("sortByPoints");
  //   };

  //   const shuffleRanking = () => {
  //     const newRanking = [...ranking].sort(() => Math.random() - 0.5);
  //     setRanking(newRanking);
  //   };

  //   const sumPoints = () => {
  //     const updatedRanking = ranking.map((item, index) => ({
  //       ...item,
  //       points: item.points + inputs[index],
  //     }));
  //     setRanking(updatedRanking);
  //     setInputs(Array(ranking.length).fill(0));
  //     console.log("sum");
  //   };

  const vote = () => {
    const updatedRanking = ranking
      .map((item, index) => ({
        ...item,
        points: item.points + inputs[index],
      }))
      .sort((a, b) => b.points - a.points);
    setRanking(updatedRanking);
    setInputs(Array(ranking.length).fill(0));
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="animated-ranking">
      <div className="animated-ranking__header">
        <Link to="/">
          <img className="animated-ranking__logo" src={RingsImg} alt="" />
        </Link>
        <div className="animated-ranking__title">
          Olympic mascot voting ceremony
        </div>
        <Link to="/">
          <img className="animated-ranking__logo" src={RingsImg} alt="" />
        </Link>
      </div>

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
        {mascotsData.map((item) => {
          const indexInRanking = ranking.findIndex(
            (rankingItem) => rankingItem.id === item.id
          );
          const inputValue =
            indexInRanking !== -1 ? inputs[indexInRanking] : "";
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
        <button className="vote-button" onClick={vote}>
          VOTE!
        </button>
      </div>

      {/* <div className="actions-container">
        <button onClick={shuffleRanking}>Shuffle Ranking</button>
        <button onClick={sortByPoints}>Sort by Points</button>
        <button onClick={sumPoints}>Sum Points</button>
      </div> */}
    </div>
  );
};

export default AnimatedRanking;
