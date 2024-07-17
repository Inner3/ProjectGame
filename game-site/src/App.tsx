import React, { Suspense, useState } from "react";
import HomePage from "./Pages/Homepage/Home";
import HeaderContainer from "./components/container/header.container";
import FooterContainer from "./components/container/footer.container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";

const Home = lazy(() => import("./Pages/Homepage/Home"));
const About = lazy(() => import("./components/footer"));
const Autofication = lazy(() => import("./authentication/aut"));

const App: React.FC = () => {
  return (
    <Router>
    <div className="main-content">
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Autofication />} />
      </Routes>
      <FooterContainer />
      </div>
    </Router>
     
  );
};

export default App;
