import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Servers from "./Components/Servers";
import Databases from "./Components/Databases";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Servers />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/databases" element={<Databases />} />
      </Routes>
    </Router>
  );
}

export default App;
