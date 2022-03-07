import "./poster.css";

const Poster = (props) => {
  const { url, title } = props;

  return (
    <div className="poster">
      <img src={url} alt={title} />

      <div className="poster-overlay">
        <p>{title}</p>

        <div className="btn-grp">
          <button title="Play">
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>

          <button title="Add to list">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
