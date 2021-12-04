import React from 'react';
import Sketch from "react-p5";
import './App.scss';
import { draw } from './P5js/draw';
import { mouseClicked } from './P5js/mouseClickEvent';
import { setup } from './P5js/setup';



function App() {

  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" mouseClicked={mouseClicked} />
    </div>
  );
}

export default App;
