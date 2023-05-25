import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Lists from "./components/Lists";

function App() {
  return (
    <>
      <About />
      <Lists />
    </>
  );
}

export default App;
