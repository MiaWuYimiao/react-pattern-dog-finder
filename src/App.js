import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./img/whiskey.jpg"
import duke from "./img/duke.jpg";
import perry from "./img/perry.jpg";
import tubby from "./img/tubby.jpg";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={props.dogs}/>
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={props.dogs}/>}>
          </Route>
          <Route exact path="/dogs/:name" element={<DogDetails dogs={props.dogs}/>}>
          </Route>
          <Route path="*" element={<Navigate replace to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
