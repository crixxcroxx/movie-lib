import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-brand">
        <h3>
          <a href="#">Movie Lib</a>
        </h3>
      </div>
      <div className="nav-links">
        <p>Movies</p>
        <p>Series</p>
        <p>Trending</p>
      </div>
    </nav>
  );
};

export default Nav;
