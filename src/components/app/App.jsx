import Banner from "../banner/Banner";
import Nav from "../nav/Nav";
import Segment from "../segment/Segment";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Segment title="Movies" endpoint="popular" />
    </div>
  );
};

export default App;
