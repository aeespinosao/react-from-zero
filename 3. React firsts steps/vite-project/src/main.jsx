import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import { HelloWroldApp } from "./HelloWroldApp";

import "./styles.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp title="title from main"/>
    </React.StrictMode>
)