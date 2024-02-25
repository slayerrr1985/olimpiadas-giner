import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./animatedRanking.scss";

const RankingItem = ({ id, rank, name, image }) => {
  return (
    <Flipped flipId={id}>
      <div className="ranking-item">
        <span className="rank">{rank}</span>
        <span className="name">{name}</span>
        <img className="image" src={image} alt={name} />
      </div>
    </Flipped>
  );
};

const AnimatedRanking = () => {
  const [ranking, setRanking] = useState([
    {
      id: 1,
      rank: 1,
      name: "Mascot 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      rank: 2,
      name: "Mascot 2",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      rank: 3,
      name: "Mascot 3",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      rank: 4,
      name: "Mascot 4",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      rank: 5,
      name: "Mascot 5",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      rank: 6,
      name: "Mascot 6",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      rank: 7,
      name: "Mascot 7",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      rank: 8,
      name: "Mascot 8",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      rank: 9,
      name: "Mascot 9",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      rank: 10,
      name: "Mascot 10",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      rank: 11,
      name: "Mascot 11",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      rank: 12,
      name: "Mascot 12",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      rank: 13,
      name: "Mascot 13",
      image: "https://via.placeholder.com/150",
    },
    // Add more items as needed
  ]);

  const updateRanking = () => {
    // Logic to update ranking, trigger animation
    // For simplicity, I'm just shuffling the list randomly
    const newRanking = [...ranking].sort(() => Math.random() - 0.5);
    setRanking(newRanking);
  };

  return (
    <div className="ranking-container">
      <Flipper flipKey={ranking.map((item) => item.id).join(",")}>
        {ranking.map((item) => (
          <RankingItem
            key={item.id}
            id={item.id}
            rank={item.rank}
            name={item.name}
            image={item.image}
          />
        ))}
      </Flipper>
      <div className="button-container">
        <button onClick={updateRanking}>Update Ranking</button>
      </div>
    </div>
  );
};

export default AnimatedRanking;
