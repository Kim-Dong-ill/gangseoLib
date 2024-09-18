import React from "react";
import "../../../../../assets/css/sass/parkingTable.scss";

function ParkingTable() {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th className="left">감면 대상</th>
          <th className="right">할인율</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="left">
            <div className="content-box flexs">
              장애인 등록증을 소지한 장애인 자동차
            </div>
          </td>
          <td className="right" rowSpan="3">
            <div className="content-box flexs">80% 감면</div>
          </td>
        </tr>
        <tr>
          <td className="left">
            <div className="content-box flexs">국가유공자 증서 소지자 차량</div>
          </td>
        </tr>
        <tr>
          <td className="left">
            <div className="content-box flexs">
              고엽제 후유증 환자 증서 소지자
            </div>
          </td>
        </tr>
        <tr>
          <td className="left">
            <div className="content-box flexs">
              5.18 민주화운동 증서 소지 차량
            </div>
          </td>
          <td className="right" rowSpan="2">
            <div className="content-box flexs">노트북 대여 5대</div>
          </td>
        </tr>
        <tr>
          <td className="left">
            <div className="content-box flexs">경형차량, 저공해 차량</div>
          </td>
        </tr>
        <tr>
          <td className="left">
            <div className="content-box flexs">다둥이 행복카드 소지자</div>
          </td>
          <td className="right" rowSpan="2">
            <div className="content-box flexs">정수기 2대</div>
          </td>
        </tr>
        <tr>
          <td className="left">
            <div className="content-box flexs">
              승용차요일제 전자태그를 부착하고 운휴일을 준수한 차량
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ParkingTable;
