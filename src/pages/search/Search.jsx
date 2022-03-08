import { useState, useRef } from "react";

import Poster from "../../components/poster/Poster";

import { useStoreShows } from "../../zustand/store";
import getUniqueFromArray from "../../utils/getUniqueFromArray";

import "./search.css";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const searchRef = useRef();

  const { trending, popular, tvShows } = useStoreShows((state) => state);
  const allShows = [...trending, ...popular, ...tvShows];
  const db = getUniqueFromArray(allShows, "id");

  const filteredShows = db.filter((show) => {
    return (
      show.title && show.title.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = () => {
    setSearchField(searchRef.current.value);
  };

  return (
    <div className="search">
      <input
        ref={searchRef}
        onChange={handleChange}
        type="text"
        placeholder="Search Title..."
      />

      <div className="search-list">
        {searchField.length > 0 &&
          filteredShows.map((show) => (
            <div className="poster-container" key={show.id}>
              <Poster
                id={show.id}
                img_url={show.poster_path || show.backdrop_path}
                vid_url={show.detailed.videos.results[0]}
                title={show.original_title}
                overview={show.overview}
                genres={show.detailed.genres}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
