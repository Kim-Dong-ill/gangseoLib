import React, { useState } from "react";
import "../assets/css/sass/menusScrollFrame.scss";
import CntWrap from "./TextBoxs/CntWrap";

function MenusScrollFrame({ children }) {
  return (
    <div className="menusScroll frame background">
      <div className="scrollFrame">
        <CntWrap>
          <div className="frameInner">
            <div className="InnerContent">{children}</div>
          </div>
        </CntWrap>
      </div>
    </div>
  );
}

export default MenusScrollFrame;
