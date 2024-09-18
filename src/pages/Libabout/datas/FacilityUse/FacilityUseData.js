import React from "react";
import restaurantImg01 from "../../../../assets/images/restaurantImg01.png";
import restaurantImg02 from "../../../../assets/images/restaurantImg02.png";
import restaurantImg03 from "../../../../assets/images/restaurantImg03.png";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";

function FacilityUseData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>시설 이용 안내</FirestTitle>
                    <div className="cntTextBox">
                        <div>
                            <li className="textBoxType1">이용 시간</li>
                            <table className="">
                                <thead>
                                    <tr>
                                        <th>시간</th>
                                        <th>운영</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>09:00 - 18:00</td>
                                        <td>운영</td>
                                    </tr>
                                    <tr>
                                        <td>18:00 - 09:00</td>
                                        <td>점심시간</td>
                                    </tr>
                                    <tr>
                                        <td>10:00 - 12:00</td>
                                        <td>간식시간</td>
                                    </tr>
                                    <tr>
                                        <td>12:00 - 13:00</td>
                                        <td>점심시간</td>
                                    </tr>
                                    <tr>
                                        <td>13:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <li className="textBoxType1">시설 소개</li>
                            <li className="imgBox">
                                <img src={restaurantImg01} alt="식당이미지1" />
                                <img src={restaurantImg02} alt="식당이미지2" />
                                <img src={restaurantImg03} alt="식당이미지3" />
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">이용 안내</li>
                            <li className="textBoxType2">
                                식당은 따로 운영되지 않으며 개인 도시락 취식 및
                                멀티자판기 사용가능합니다.
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default FacilityUseData;
