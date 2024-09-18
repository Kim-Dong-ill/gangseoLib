import React from "react";
import "../../../../../assets/css/sass/table.scss";

function Table1() {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th className="left ">설치위치</th>
          <th>설치 기기</th>
          <th className="right">이용 요금</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="left">
            <div className="content-box flexs">인문사회자연과학실 (2층)</div>
          </td>
          <td rowSpan="2">
            <div className="flexs">복사기 1대</div>
          </td>
          <td className="right" rowSpan="2">
            A4용지 : 30원/매(흑백)
            <br />
            B4용지 : 50원/매(흑백)
          </td>
        </tr>
        <tr>
          <td className="left">
            <div className="content-box flexs">어문학 간행물실 (3층)</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table1;
