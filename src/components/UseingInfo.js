import React, { useState } from "react";
import Modal from "./Layout/Modal";
import "../assets/css/sass/modal.scss";

function UseingInfo() {
  const [modalState, setModalState] = useState(false);

  const modalOpen = () => {
    setModalState(true);
  };
  const modalClose = () => {
    setModalState(false);
  };
  return (
    <div className="menusScroll frame background">
      <Modal isOpen={modalState} onClose={modalClose} />
      <div className="scrollFrame">
        <div className="frameInner">
          <div className="InnerContent">
            <button
              onClick={() => {
                modalOpen();
              }}
            >
              버튼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseingInfo;
