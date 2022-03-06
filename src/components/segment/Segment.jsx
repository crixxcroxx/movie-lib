import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStoreShows } from "../../zustand/store";
import "swiper/css";
import "./segment.css";

const Segment = ({ title, endpoint }) => {
  const fetchShows = useStoreShows((state) => state.fetchShows);
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  let shows = useStoreShows((state) => state[endpoint]);
  console.log(shows);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchShows({ signal }, endpoint);

    return () => controller.abort();
  }, [endpoint, fetchShows]);

  return (
    <div className="segment">
      <p className="section-title">{title}</p>

      <Swiper spaceBetween={5} slidesPerView={6}>
        {shows.length > 0 &&
          shows.map((show) => (
            <SwiperSlide key={show.id}>
              <img
                src={
                  `${BASE_URL}${show.poster_path}` ||
                  `${BASE_URL}${show.backdrop_path}`
                }
                alt={show.original_title}
              />
              <div className="segment-overlay">
                <p>{show.original_title}</p>

                <div className="btn-grp">
                  <button title="Play">
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </button>

                  <button title="Add to list">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Segment;
