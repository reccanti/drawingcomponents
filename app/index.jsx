import React from "react";
import ReactDOM from "react-dom";

/* eslint no-unused-vars: 0 */
import stylesheet from "./sass/main.scss";

import DrawingCanvas from "./components/canvas.jsx";

ReactDOM.render(
    <DrawingCanvas width={550} height={550} brushColor={"#000000"}/>, 
    document.getElementById("container")
);