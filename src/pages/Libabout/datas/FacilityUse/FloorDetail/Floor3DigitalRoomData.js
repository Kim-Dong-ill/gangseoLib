import React from "react";
import digitalRoomImg01 from "../../../../../assets/images/digitalRoomImg01.png";
import digitalRoomImg02 from "../../../../../assets/images/digitalRoomImg02.png";
import digitalRoomImg03 from "../../../../../assets/images/digitalRoomImg03.png";
function Floor3DigitalRoomData() {
    return (
        <>
            {/* Start:큰 단락 복사 사용시 */}
            <div className="cntTextBox">
                <div>
                    <li className="textBoxType2">
                        <span>위치(층) :</span> 강서도서관 &#62; 3층
                    </li>
                    <li className="textBoxType2">
                        <span>전화번호 :</span> 02-3219-7061
                    </li>
                </div>
                <div>
                    <li className="textBoxType1">시설 소개</li>
                    <li className="imgBox">
                        <img
                            src={digitalRoomImg01}
                            alt="디지털 자료실 이미지1"
                        />
                        <img
                            src={digitalRoomImg02}
                            alt="디지털 자료실 이미지2"
                        />
                        <img
                            src={digitalRoomImg03}
                            alt="디지털 자료실 이미지3"
                        />
                    </li>
                </div>
                <div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내 </span>
                        </li>
                        <li className="textBoxType3">
                            PC를 통한 인터넷 정보검색 및 원문DB검색(국회,
                            국립중앙도서관), 자료편집 등 다양한 <br />
                            정보처리 작업을 할 수 있습니다. 또한
                            노트북코너에서는 개인노트북을 이용할 수 있으며
                            영상코너에서는 DVD등 다양한 멀티미디어 자료를 이용할
                            수 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>좌석수 :</span> 37석
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용코너</span>
                        </li>
                        <li className="textBoxType3">
                            PC코너(장애인전용PC 및 경로석PC 포함), 노트북 코너,
                            VOD 코너, 영상코너 (퀵메뉴 '디지털실 예약시스템'에서
                            예약)
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용시간</span>
                        </li>
                        <li className="textBoxType3">
                            평일(월~금) : 09:00~18:00, 주말(토.일) : 09:00~17:00
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>이용안내</span>
                        </li>
                        <li className="textBoxType3">
                            자료실 내에 신간도서코너가 비치되어있으며, 과월호
                            잡지(2개월 이전)를 대출해주고 있습니다.
                        </li>
                        <li className="textBoxType3">
                            소장자료검색을 위하여 검색PC(2대)가 비치되어있으며,
                            필요한 자료는 복사할 수 있습니다.
                        </li>
                        <li className="textBoxType3">
                            핸드폰은 진동으로 하시고 음식물 반입이 불가 합니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>대출안내</span>
                        </li>
                        <li className="textBoxType3">
                            관외대출회원 가입즉시 1인 10권이내(2주간)도서를
                            대출할 수 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>자료복사</span>
                        </li>
                        <li className="textBoxType3">
                            복사요금은 A4 1매당 30원 / B4 1매당 50원 이며,
                            흑백복사만 가능합니다.
                        </li>
                        <li className="textBoxType3">
                            복사기는 코인기와 연결되어 동전만 사용가능합니다.
                        </li>
                        <li className="textBoxType3">
                            복사는 도서관소장자료에 한하여 가능하며, 저작권에
                            의하여 부분복사만 가능합니다.
                        </li>
                        <li className="textBoxType3">개인자료 복사 불허</li>
                    </div>
                </div>
                <div>
                    <li className="textBoxType1">코너별 이용 안내</li>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>PC코너</span>
                        </li>
                        <li className="textBoxType3">
                            1인 1일(최대 6회 로그인) 총180분 사용 가능합니다.
                        </li>
                        <li className="textBoxType3">
                            국회.국립중앙도서관의 원문DB는 지정된 PC6번에서만
                            이용가능합니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>노트북코너</span>
                        </li>
                        <li className="textBoxType3">
                            개인노트북이용자를 위한 코너로 퀵메뉴 '디지털실
                            예약시스템'에서 좌석예약하시면 됩니다.
                            <br /> (1인 1일 3시간 이용가능)
                        </li>
                        <li className="textBoxType3">
                            제1학습실에도 별도의 무선노트북석이 마련되어
                            있습니다.
                        </li>
                        <li className="textBoxType3">
                            강서도서관 WIFI 연결 후 인터넷 사용이 가능합니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>영상코너</span>
                        </li>
                        <li className="textBoxType3">
                            도서관 소장자료(DVD등)에 한하여 이용가능 합니다.(1인
                            1일 1회 3시간 이용가능)
                        </li>
                        <li className="textBoxType3">
                            좌석예약 후 원하시는 자료를 대출하여 이용가능합니다.
                        </li>
                        <li className="textBoxType3">
                            ※ 주의사항 : PC코너 예약시간 10분후에는 예약 위반
                            처리되며 예약이 자동취소됩니다.
                            <br />
                            (PC코너, 영상코너, 노트북코너 모두 해당)뿐만 아니라
                            위반이력은 자동 등록되며 2회 이상 위반 시 다음 1일
                            동안 이용이 제한합니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>디지털자료실 이용</span>
                        </li>
                        <li className="textBoxType3">
                            <span>준회원 :</span> 도서관홈페이지에서 회원가입을
                            한 이용자(디지털자료실 및 열람실 이용 가능)
                        </li>
                        <li className="textBoxType3">
                            <span>정회원 :</span> 자료실에 내방하여
                            대출회원가입을 한 이용자(도서, 비도서, 전자책 대출
                            가능)
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>자료현황</span>
                        </li>
                        <li className="textBoxType3">
                            비도서는 5점까지 대출하실 수 있습니다.
                        </li>
                    </div>
                    <div className="inner">
                        <li className="textBoxType2">
                            <span>자료출력</span>
                        </li>
                        <li className="textBoxType3">
                            출력은 A4 흑백 단면만 지원되며 요금은 50원/1장
                            입니다.
                        </li>
                        <li className="textBoxType3">
                            원문DB자료를 출력하실 때는 PC6번(원문DB검색코너)을
                            이용하십시오.
                        </li>
                    </div>
                </div>
            </div>
            {/* End:큰 단락 복사 사용시 */}
        </>
    );
}

export default Floor3DigitalRoomData;
