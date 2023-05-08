import React from "react";
import DeleteGame from "./DeleteGame";

function GameCard({ game, handleGameClick, handleDeleteGame }) {
  const { gameNo, home, away, conference, day, date, time, court, location } =
    game;

  function handleDelete() {
    handleDeleteGame(gameNo);
  }

  return (
    <div className="GameCard">
      <h2>
        {home} vs {away}
      </h2>
      <p>
        <span>Game No: </span>
        {gameNo}
        </p>
      <p>
        <span>Conference: </span>
        {conference}
      </p>
      <p>
        <span>Day: </span>
        {day}
      </p>
      <p>
        <span>Date: </span>
        {date}
      </p>
      <p>
        <span>Time: </span>
        {time}
      </p>
      <p>
        <span>Court: </span>
        {court}
      </p>
      <p>
        <span>Location: </span>
        {location}
      </p>
      <DeleteGame gameNo={gameNo} onDelete={handleDelete} />
    </div>
  );
}

export default GameCard;