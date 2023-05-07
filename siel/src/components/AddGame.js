import React, { useState } from "react";

const AddGame = ({ onAddGame }) => {
  const [gameData, setGameData] = useState({
    gameNo: "",
    home: "",
    away: "",
    conference: "",
    day: "",
    date: "",
    time: "",
    court: "",
    location: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGameData((prevGameData) => ({
      ...prevGameData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      });

      if (response.ok) {
        const data = await response.json();
        onAddGame(data);
        setGameData({
          gameNo: "",
          home: "",
          away: "",
          conference: "",
          day: "",
          date: "",
          time: "",
          court: "",
          location: "",
        });
      } else {
        alert("Failed to add game");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="AddGame">
      <h3>Add a New Game</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Game Number:
          <input
            type="text"
            name="gameNo"
            value={gameData.gameNo}
            onChange={handleChange}
          />
        </label>
        <label>
          Home Team:
          <input
            type="text"
            name="home"
            value={gameData.home}
            onChange={handleChange}
          />
        </label>
        <label>
          Away Team:
          <input
            type="text"
            name="away"
            value={gameData.away}
            onChange={handleChange}
          />
        </label>
        <label>
          Conference:
          <input
            type="text"
            name="conference"
            value={gameData.conference}
            onChange={handleChange}
          />
        </label>
        <label>
          Day:
          <input
            type="text"
            name="day"
            value={gameData.day}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={gameData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            name="time"
            value={gameData.time}
            onChange={handleChange}
          />
        </label>
        <label>
          Court:
          <input
            type="text"
            name="court"
            value={gameData.court}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={gameData.location}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default AddGame;
