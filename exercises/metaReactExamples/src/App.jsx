import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts";
import About from "./components/About";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <nav className="nav-item navbar bg-light">
        <Link to="/" className="nav-item navbar-brand bg-light">
          {" "}
          Calculator{" "}
        </Link>
        <Link to="/promo" className="nav-link bg-light">
          {" "}
          About{" "}
        </Link>
        <Link to="/contacts" className="nav-link bg-light ">
          {" "}
          Contacts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Calculator />}></Route>
        <Route path="/promo" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
