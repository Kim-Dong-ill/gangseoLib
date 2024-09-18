import React from 'react'
import "../../../../../assets/css/sass/table3.scss"
function Table3() {
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
                    <td className="left">
                        <div className="content-box flexs">
                            디지털자료실 (3층)
                        </div>
                    </td>
                    <td>
                        <div className="flexs">스캐너 1대</div>
                    </td>
                    <td className="right">
                        <div className="content-box flexs">
                            무료
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table3