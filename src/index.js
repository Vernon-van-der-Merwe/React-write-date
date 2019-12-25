import React from "react";
import ReactDOM from "react-dom";

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
var d = new Date();

ReactDOM.render(
  <div>
    <p>created by Vernon van der Merwe</p>
    <p>Copyright {d.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
