import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Nav from "./components/Nav";
import Schedule from "./components/Schedule";
import Filter from "./components/Filter";
import AddGame from "./components/AddGame";
import Home from "./components/Home";
import Games from "./components/Games"; // Import the 'Games' component

function App() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then((response) => {
        setGames(response.data);
        setFilteredGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function filterGames(searchTerm) {
    const filtered = games.filter((game) => {
      const properties = [
        "home",
        "away",
        "conference",
        "day",
        "date",
        "time",
        "court",
        "location",
      ];

      return properties.some((property) =>
        game[property].toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredGames(filtered);
  }

  function handleAddGame(newGame) {
    axios
      .post("http://localhost:3000/games", newGame)
      .then((response) => {
        const updatedGames = [...games, response.data];
        setGames(updatedGames);
        setFilteredGames(updatedGames);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Router>
      <div id="App">
        <div className="mainnav">
          <div id="topbar">
            <div className="route-links">
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/filter"
                  element={<Filter games={games} setFilteredGames={setFilteredGames} />}
                />
                <Route
                  path="/games"
                  element={ // Fix the component name to 'Games'
                    <Games
                      games={filteredGames}
                      setSelectedGame={setSelectedGame}
                      setFilteredGames={setFilteredGames}
                    />
                  }
                />
                <Route
                  path="/addGame"
                  element={<AddGame onAddGame={handleAddGame} />} // Fix the path name to 'addGame'
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
