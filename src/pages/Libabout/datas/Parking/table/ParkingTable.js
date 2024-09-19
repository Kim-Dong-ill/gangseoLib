import React from "react";
import "../../../../../assets/css/sass/parkingTable.scss";

function ParkingTable() {
    return (
        <table className="defaultTable">
            <thead>
                <tr>
                    <th width="70%">감면 대상</th>
                    <th>할인율</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>장애인 등록증을 소지한 장애인 자동차</td>
                    <td rowSpan="3">80% 감면</td>
                </tr>
                <tr>
                    <td className="lastTd">국가유공자 증서 소지자 차량</td>
                </tr>
                <tr>
                    <td className="lastTd">고엽제 후유증 환자 증서 소지자</td>
                </tr>
                <tr>
                    <td>5.18 민주화운동 증서 소지 차량</td>
                    <td rowSpan="2">50%감면</td>
                </tr>
                <tr>
                    <td className="lastTd">경형차량, 저공해 차량</td>
                </tr>
                <tr>
                    <td>다둥이 행복카드 소지자</td>
                    <td rowSpan="2">30%감면</td>
                </tr>
                <tr>
                    <td className="lastTd">
                        승용차요일제 전자태그를 부착하고 운휴일을 준수한 차량
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ParkingTable;
