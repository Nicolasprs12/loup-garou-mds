import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Join from "./views/Join";
import Game from "./views/Game";
import Create from "./views/Create";
import Account from "./views/Account";
import AccountFake from "./views/AccountFake";

import HeaderHome from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <HeaderHome />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Join" element={<Account />} />
        <Route path="/Game/:id" element={<Game />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Account/:id" element={<AccountFake />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
