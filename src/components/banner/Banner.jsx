import { useNavigate } from "react-router-dom";
import { useStoreShows } from "../../zustand/store";

import "./banner.css";

const Banner = () => {
  const trending = useStoreShows((state) => state.trending);
  const featured =
    trending.length > 0 &&
    trending[Math.floor(Math.random() * (trending.length - 1))];
  const navigate = useNavigate();

  return (
    <div className="banner">
      {trending.length > 0 && (
        <>
          <div className="banner-img">
            <img
              src={`https://image.tmdb.org/t/p/w1280${
                featured.backdrop_path || featured.poster_path
              }`}
              alt={featured.original_name || featured.original_title}
            />
          </div>

          <div className="shadow"></div>

          <div className="banner-info">
            <h1 className="title">
              {featured.original_name || featured.original_title}
            </h1>

            <span className="synopsis">
              {featured.overview.length > 250
                ? featured.overview.substring(0, 250) + "..."
                : featured.overview}
            </span>

            <div className="btn-grp">
              <button
                className="btn btn-round-primary"
                onClick={() =>
                  navigate(
                    `watch/${
                      featured.original_name || featured.original_title
                    }/${featured.detailed.videos.results[0].key}`
                  )
                }
              >
                <span>
                  <i className="fa fa-play" aria-hidden="true"></i> Play
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
