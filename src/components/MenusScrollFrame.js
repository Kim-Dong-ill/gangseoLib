import React, { useState } from "react";
import "../assets/css/sass/menusScrollFrame.scss";
import "../assets/css/sass/modal.scss";
import Modal from "./Layout/Modal";
function MenusScrollFrame() {
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
              a
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenusScrollFrame;
