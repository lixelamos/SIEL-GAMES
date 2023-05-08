import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

// Placeholder component for Search
const Search = () => {
  return <div></div>;
};

function Games() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleFilter(type) {
    const filtered = games.filter((game) => game[type]);
    setFilteredGames(filtered);
  }

  function handleAddGame(newGame) {
    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => response.json())
      .then((data) => {
        setGames([...games, data]);
        setFilteredGames([...games, data]);
      })
      .catch((error) => console.log(error));
  }

  function deleteGame(gameId) {
    fetch(`http://localhost:3000/games/${gameId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the games and filteredGames state by removing the deleted game
        const updatedGames = games.filter((game) => game.gameNo !== gameId);
        setGames(updatedGames);
        setFilteredGames(updatedGames);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="Games">
      <h1> SIEL Basketball Games</h1>
      <Search games={games} setFilteredGames={setFilteredGames} />
      <div className="filters">
        <button onClick={() => handleFilter("day")}>Filter by Day</button>
        <button onClick={() => handleFilter("date")}>Filter by Date</button>
        <button onClick={() => handleFilter("court")}>Filter by Court</button>
        <button onClick={() => handleFilter("time")}>Filter by Time</button>
      </div>
      <div className="games-container">
        {filteredGames.map((game) => (
          <GameCard key={game.gameNo} game={game} onDelete={() => deleteGame(game.gameNo)} />
        ))}
      </div>
    </div>
  );
}

export default Games;
