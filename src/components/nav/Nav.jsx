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
      <div className="nav-icons">
        <Link to="search">
          <i className="fa fa-search" aria-hidden="true" title="Search"></i>
        </Link>
        <Link to="my-list">
          <i className="fa fa-plus" aria-hidden="true" title="My List"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
