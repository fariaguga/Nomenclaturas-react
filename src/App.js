import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import NavBar from "./Components/NavBar";
// import Servers from "./Components/Servers";
import Servers from "./Pages/Servers";
import Databases from "./Pages/Databases";
import HourControl from "./Pages/HourControl";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/databases" element={<Databases />} />
        <Route path="/hour_control" element={<HourControl />} />

      </Routes>
    </Router>
  );
}

export default App;
