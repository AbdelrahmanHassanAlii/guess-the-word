import React from "react";
import "../css/guideArea.css";

export default function GuideArea() {
  return (
    <div className="key-colors">
      <h1 className="guide-header">Guide For Play</h1>
      <div className="key-color">
        <div className="key in-place"></div>
        <div className="key-text">Letter Is Correct And In Place</div>
      </div>
      <div className="key-color">
        <div className="key not-in-place"></div>
        <div className="key-text">Letter Is Correct But Not In Place</div>
      </div>
      <div className="key-color">
        <div className="key no"></div>
        <div className="key-text">Letter Is Wrong</div>
      </div>
    </div>
  );
}
