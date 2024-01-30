import React from "react";
import { gameName } from "../index.js";
import "../css/header.css";

export default function Header() {
  return (
    <div>
      <h1 className="header">{gameName}</h1>
    </div>
  );
}
