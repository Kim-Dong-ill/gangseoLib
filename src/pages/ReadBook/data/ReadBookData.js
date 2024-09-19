import React from "react";
import "../../../assets/css/sass/readbook.scss";
import readbookimg1 from "../../../assets/images/readbookimg1.svg";
import soundIcon from "../../../assets/icons/readbookIcon.svg";

function ReadBookData() {
  return (
    <div className="readBookContainer">
      <div className="readBookInner">
        <div className="innerImg">
          <img src={readbookimg1} alt="" />
        </div>
        <div className="innerContent">
          <div className="contentText">
            <div>제목 : 언젠가 우리가 같은 별을 바라본다면</div>
            <div>저자 : 차인표</div>
            <div>발행처 : 제딧 그림</div>
            <div>발행 연도 : 2021년 12월 15일 출간</div>
            <div>ISNB : 9791160320268</div>
            <div>자료형태 : e-Book</div>
          </div>
          <div className="contentBtn">
            <img src={soundIcon} alt="" />
            <div className="btnText">도서 읽어주기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadBookData;
