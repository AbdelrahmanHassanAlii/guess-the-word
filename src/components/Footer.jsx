import React from "react";
import { gameName } from "../index";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {`${gameName} made with 💚 by`} {" "}
      <a href="https://abdelrahmanhassanalii.github.io/card/" className="proto" target="_blank">
        Abdelrahman
      </a>
    </div>
  );
}
