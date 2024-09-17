import React from "react";
import FirestTitle from "../../../components/TextBoxs/CntTitle";
import "../../../assets/css/sass/iframe.scss";

function Notebook() {
  return (
    <>
      {/* <CntWrap> */}
      {/* Start:큰 단락 복사 사용시 */}
      <div className="cntWrapBox">
        <FirestTitle>노트북 좌석 안내</FirestTitle>
        <iframe
          className="setIframe"
          src="http://gslib-seat.sen.go.kr/MAPTEMP/1_219.255.7.156.html"
          frameborder="0"
        ></iframe>
      </div>
      {/* End:큰 단락 복사 사용시 */}
      {/* </CntWrap> */}
    </>
  );
}

export default Notebook;
