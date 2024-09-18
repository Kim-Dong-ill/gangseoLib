import React from "react";
import FirestTitle from "../../../components/TextBoxs/CntTitle";

function Nomal() {
  return (
    <>
      {/* Start:큰 단락 복사 사용시 */}
      <div className="cntWrapBox">
        <FirestTitle>일반 좌석 안내</FirestTitle>
        <iframe
          className="setIframe"
          src="http://gslib-seat.sen.go.kr/MAPTEMP/3_222.112.27.120.html"
          frameborder="0"
        ></iframe>
      </div>
      {/* End:큰 단락 복사 사용시 */}
    </>
  );
}

export default Nomal;
