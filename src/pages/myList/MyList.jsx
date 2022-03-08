import { useStorePersonalList } from "../../zustand/store";

import "./myList.css";

const MyList = () => {
  const { saved, removeFromList } = useStorePersonalList((state) => state);

  return (
    <div className="my-list-wrapper">
      <p>My List</p>
      <div className="my-list">
        {saved.length > 0 &&
          saved.map((movie) => (
            <div key={movie.id}>
              <img src={movie.img_url} alt={movie.title} />
              <button
                className="btn btn-round-danger"
                onClick={() => removeFromList(movie.id)}
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyList;
