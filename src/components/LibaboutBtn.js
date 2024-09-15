import React from "react";

function LibaboutBtn({ item }) {
  return (
    <div className="libAboutBtn">
      <div className="libAboutTitle">{item.title}</div>
      <div className="libAboutIcon">
        <img src={item.icon} alt="" />
      </div>
    </div>
  );
}

export default LibaboutBtn;
