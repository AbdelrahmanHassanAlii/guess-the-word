import React from "react";

export default function GuideArea() {
  return (
    <div className="key-colors">
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
