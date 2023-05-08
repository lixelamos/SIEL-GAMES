import React from "react";

function DeleteGame({ home, onDelete }) {
<<<<<<< HEAD
  function handleDelete() {
    fetch('http://localhost:3000/games ${home}', {
=======
  function handleDeleteGame() {
    fetch(`http://localhost:8001/games${home}`, {
>>>>>>> origin/main
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