import React from "react";

function DeleteGame({ home, onDelete }) {
  function handleDeleteGame() {
    fetch(`http://localhost:8001/games${home}`, {
      method: "DELETE",
    })
      .then(() => {
        onDelete(home);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="DeleteGame">
      <button onClick={handleDeleteGame}>Delete Game</button>
    </div>
  );
}

export default DeleteGame;