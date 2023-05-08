import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
<<<<<<< HEAD
import Search from "./Search";
=======
import Filter from "./Filter";
import AddGame from "./AddGame";
>>>>>>> origin/main

function Games() {
const [games, setGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([]);

<<<<<<< HEAD
useEffect(() => {
fetch(" http://localhost:3000/games")
.then((response) => response.json())
.then((data) => {
setGames(data);
setFilteredGames(data);
})
.catch((error) => console.log(error));
}, []);
=======
  useEffect(() => {
    fetch(" http://localhost:8001/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
      })
      .catch((error) => console.log(error));
  }, []);
>>>>>>> origin/main

function handleFilter(type) {
const filteredGames = games.filter((game) => game[type]);
setFilteredGames(filteredGames);
}

<<<<<<< HEAD
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

return (
<div className="Games">
<h1> SIEL Basketball Games </h1>
<Search games={games} setFilteredGames={setFilteredGames} />
<div className="filters">
<button onClick={() => handleFilter("day")}>Filter by Day</button>
<button onClick={() => handleFilter("date")}>Filter by Date</button>
<button onClick={() => handleFilter("court")}>Filter by Court</button>
<button onClick={() => handleFilter("time")}>Filter by Time</button>
</div>
<div className="games-container">
{filteredGames.map((game) => (
<GameCard key={game.gameNo} game={game} />
))}
</div>
<AddGame handleAddGame={handleAddGame} />
</div>
);
=======
  function handleAddGame(newGame) {
    fetch("http://localhost:8001/games", {
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

  return (
    <div className="Games">
      <h1> SIEL Basketball Schedule</h1>
      {/* <Filter games={games} setFilteredGames={setFilteredGames} /> */}
      <div className="filters">
        <button onClick={() => handleFilter("day")}>Filter by Day</button>
        <button onClick={() => handleFilter("date")}>Filter by Date</button>
        <button onClick={() => handleFilter("court")}>Filter by Court</button>
        <button onClick={() => handleFilter("time")}>Filter by Time</button>
      </div>
      <div className="games-container">
        {filteredGames.map((game) => (
          <GameCard key={game.gameNo} game={game} />
        ))}
      </div>
      <AddGame handleAddGame={handleAddGame} />
    </div>
  );
>>>>>>> origin/main
}

export default Games;