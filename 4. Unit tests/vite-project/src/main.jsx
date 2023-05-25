import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import { HelloWroldApp } from "./HelloWroldApp";

import "./styles.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp value={21}/>
    </React.StrictMode>
)