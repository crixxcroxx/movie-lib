import { Route, Routes } from "react-router-dom";

import Nav from "../nav/Nav";
import Home from "../../pages/home/Home";
import Watch from "../../pages/watch/Watch";
import MyList from "../../pages/myList/MyList";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watch/:title/:id" element={<Watch />} />
        <Route path="my-list" element={<MyList />} />
      </Routes>
    </div>
  );
};

export default App;
