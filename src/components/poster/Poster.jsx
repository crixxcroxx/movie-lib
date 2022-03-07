import { useState } from "react";
import Modal from "react-modal";

import { useStorePersonalList } from "../../zustand/store";

import "./poster.css";

const customStyles = {
  content: {
    maxWidth: "90vw",
    inset: "50% auto auto 50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Poster = (props) => {
  const { id, img_url, vid_url, title, overview, genres } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  const { saved, addToList, removeFromList } = useStorePersonalList(
    (state) => state
  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [isSaved, setIsSaved] = useState(
    saved.findIndex((item) => item.id === id) < 0 ? false : true
  );

  const handleClick = () => {
    setIsSaved(!isSaved);
    !isSaved
      ? addToList({
          id,
          img_url,
          vid_url,
          title,
          overview,
          genres,
        })
      : removeFromList(id);
  };

  return (
    <div className="poster">
      <img src={img_url} alt={title} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="btn-close" onClick={closeModal}>
            <i className="fa fa-close" aria-hidden="true"></i>
          </button>
        </div>

        <div className="modal-body">
          {vid_url ? (
            <iframe
              src={`https://www.youtube.com/embed/${vid_url.key}?&autoplay=1&controls=0&loop=1`}
              title={title}
              frameBorder={0}
            />
          ) : (
            <div>No Preview Available</div>
          )}
          <div className="genre-wrapper">
            {genres.length > 0 &&
              genres.map((genre) => <div key={genre.name}>{genre.name}</div>)}
          </div>

          <p>{overview}</p>

          <br />
          <button>Add to Watchlist</button>
        </div>
      </Modal>

      <div className="poster-overlay">
        <p onClick={openModal}>{title}</p>

        <div className="btn-grp">
          <button title="Play">
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>

          <button
            title={isSaved ? "Remove from list" : "Add to list"}
            onClick={handleClick}
          >
            {isSaved ? (
              <i className="fa fa-trash" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-plus" aria-hidden="true"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
