import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-brand">
        <h3>
          <Link to="/">Movie Lib</Link>
        </h3>
      </div>
      <div className="nav-links">
        <Link to="search">Search</Link>
        <Link to="my-list">My List</Link>
      </div>
    </nav>
  );
};

export default Nav;
