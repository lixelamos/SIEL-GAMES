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
    fetch("https://gamesapi-2hk8.onrender.com/games")
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
    fetch("https://gamesapi-2hk8.onrender.com/games", {
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
    fetch(`https://gamesapi-2hk8.onrender.com/games/${gameId}`, {
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
      <div className="games-container">
        {filteredGames.map((game) => (
          <GameCard key={game.gameNo} game={game} onDelete={() => deleteGame(game.gameNo)} />
        ))}
      </div>
    </div>
  );
}

export default Games;
