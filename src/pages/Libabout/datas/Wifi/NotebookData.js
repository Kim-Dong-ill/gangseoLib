import React from "react";
import FirestTitle from "../../../../components/TextBoxs/CntTitle";
import CntWrap from "../../../../components/TextBoxs/CntWrap";

function NotebookData() {
    return (
        <>
            <CntWrap>
                {/* Start:큰 단락 복사 사용시 */}
                <div className="cntWrapBox">
                    <FirestTitle>노트북</FirestTitle>
                    <div className="cntTextBox">
                        <div>
                            <li>
                                <li className="textBoxType2">가입자격</li>
                            </li>
                            <li>
                                <li className="textBoxType2">가입자격</li>
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">가입자격</li>
                            <li className="textBoxType2">
                                회원가입 전용 PC(자료실 비치) or
                                홈페이지(온라인대출회원신청)에서 본인의 개인정보
                                입력 후(준회원) &rarr;; 자료실 직원에게
                                준비물(회원가입시 필요한 서류)제시 &rarr;
                                대출회원증이 발급(정회원)되며 대출가능 ※
                                홈페이지 회원 가입 후 방문이 어려운 경우
                                비대면자격확인인증을 통해 대출회원(정회원) 전환
                                가능
                            </li>
                        </div>
                        <div>
                            <li className="textBoxType1">가입자격</li>
                            <li className="textBoxType2">
                                회원가입 전용 PC(자료실 비치) or
                                홈페이지(온라인대출회원신청)에서 본인의 개인정보
                                입력 후(준회원) &rarr; 자료실 직원에게
                                준비물(회원가입시 필요한 서류)제시 &rarr;
                                대출회원증이 발급(정회원)되며 대출가능 ※
                                홈페이지 회원 가입 후 방문이 어려운 경우
                                비대면자격확인인증을 통해 대출회원(정회원) 전환
                                가능
                            </li>
                            <li className="textBoxType3">
                                회원가입 전용 PC(자료실 비치) or
                                홈페이지(온라인대출회원신청)에서 본인의 개인정보
                                입력 후(준회원) &rarr; 자료실 직원에게
                                준비물(회원가입시 필요한 서류)제시 &rarr;
                                대출회원증이 발급(정회원)되며 대출가능 ※
                                홈페이지 회원 가입 후 방문이 어려운 경우
                                비대면자격확인인증을 통해 대출회원(정회원) 전환
                                가능
                            </li>
                        </div>
                    </div>
                </div>
                {/* End:큰 단락 복사 사용시 */}
            </CntWrap>
        </>
    );
}

export default NotebookData;
