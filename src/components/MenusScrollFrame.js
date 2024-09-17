import React, { useState } from "react";
import "../assets/css/sass/menusScrollFrame.scss";

function MenusScrollFrame({ children }) {
  return (
    <div className="menusScroll frame background">
      <div className="scrollFrame">
        <div className="frameInner">
          <div className="InnerContent">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MenusScrollFrame;
