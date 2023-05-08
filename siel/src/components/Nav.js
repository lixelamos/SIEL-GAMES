import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="navigation">
      <Link to="/">Home</Link>
      <Link to="/filter" id="Search-a">
        Search
      </Link>
      <Link to="/games" id="Games-a">
        Games
      </Link>
      <Link to="/AddGame" id="AddGame-a">
        Add Game
      </Link>
    </div>
  );
}
export default Nav;