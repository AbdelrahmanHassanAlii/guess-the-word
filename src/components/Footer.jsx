import React from "react";
import { gameName } from "../index";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {`${gameName} made with 💚 by`}{" "}
      <a href="/#" className="proto">
        Abdelrahman
      </a>
    </div>
  );
}
