import { useState } from "react";
import "./App.css";
import Router from "./Routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <Nav />
      <Router />
    </div>
  );
}

export default App;
