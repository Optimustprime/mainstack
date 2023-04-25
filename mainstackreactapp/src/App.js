import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from "./Components/Home/home";
import React from "react";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact  path ="/" element={<Home/>} />
        </Routes>
      </Router>
  );
}


export default App;



