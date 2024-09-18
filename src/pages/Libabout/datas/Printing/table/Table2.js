import React from 'react'
import "../../../../../assets/css/sass/table2.scss"
function Table2() {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    <th className="left">설치위치</th>
                    <th>설치 기기</th>
                    <th className="right">이용 요금</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="left" rowSpan="2">
                        <div className="content-box flexs">
                            복사기 1대
                        </div>
                    </td>
                    <td>
                        <div className="flexs">프린터 1대</div>
                    </td>
                    <td className="right" rowSpan="2">
                        <div className="content-box flexs">
                            A4용지 : 50원/매
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="flexs">원문DB 프린터 1대</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table2