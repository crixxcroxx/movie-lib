import Banner from "../../components/banner/Banner";
import Segment from "../../components/segment/Segment";

const Home = () => {
  return (
    <div>
      <Banner />
      <Segment title="Movies" endpoint="popular" />
    </div>
  );
};

export default Home;
