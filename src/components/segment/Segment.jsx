import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Poster from "../poster/Poster";
import { useStoreShows } from "../../zustand/store";

import "swiper/css";
import "./segment.css";

const Segment = ({ title, endpoint }) => {
  const fetchShows = useStoreShows((state) => state.fetchShows);
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  let shows = useStoreShows((state) => state[endpoint]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchShows({ signal }, endpoint);

    return () => controller.abort();
  }, [endpoint, fetchShows]);

  return (
    <div className="segment">
      <p className="section-title">{title}</p>

      <Swiper
        spaceBetween={5}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 3,
          },
          480: {
            width: 480,
            slidesPerView: 4,
          },
          640: {
            width: 640,
            slidesPerView: 4,
          },
          768: {
            width: 768,
            slidesPerView: 6,
          },
          900: {
            width: 900,
            slidesPerView: 6,
          },
        }}
      >
        {shows.length > 0 &&
          shows.map((show) => (
            <SwiperSlide key={show.id}>
              <Poster
                id={show.id}
                img_url={
                  `${BASE_URL}${show.poster_path}` ||
                  `${BASE_URL}${show.backdrop_path}`
                }
                vid_url={show.detailed.videos.results[0]}
                title={show.original_title}
                overview={show.overview}
                genres={show.detailed.genres}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Segment;
