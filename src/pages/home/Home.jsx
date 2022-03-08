import Banner from "../../components/banner/Banner";
import Segment from "../../components/segment/Segment";

import { endpoints } from "../../assets/data";

import "./home.css";

const Home = () => {
  const keys = Object.keys(endpoints);
  console.log(endpoints[keys[0]].title);

  return (
    <div className="home">
      <Banner />
      <>
        {keys.map((key, idx) => (
          <Segment
            key={key}
            title={endpoints[keys[idx]].title}
            endpoint={keys[idx]}
          />
        ))}
        {/* <Segment title={endpoints[keys[0]].title} endpoint={keys[0]} /> */}
      </>
    </div>
  );
};

export default Home;
