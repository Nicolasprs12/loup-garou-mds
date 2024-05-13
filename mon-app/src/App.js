import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Join from "./views/Join";
import Game from "./views/Game";
import Create from "./views/Create";
import Account from "./views/Account";

import HeaderHome from "./components/Header";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <HeaderHome setUser={setUser} userSession={userSession} />
=======
      <HeaderHome />
>>>>>>> 81ac92bdcfb6b3e61ff2a8f3ba408c5f48b59664
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Game/:id" element={<Game />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Account/:id" element={<Account />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
