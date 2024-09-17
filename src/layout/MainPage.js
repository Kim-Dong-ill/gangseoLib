import React from "react";
import { Link } from "react-router-dom";
import MainIcons from "../components/Icons/MainIcons";
import { MainBackWrap } from "../components/Layout/BackWrap";

function MainPage() {
    return (
        <>
            <MainBackWrap>
                <h1>Main Page</h1>
                <div className="mainMenuWrap">
                    <div className="mainMenubox">
                        <Link to="/subTest">
                            <div className="innerPoint">
                                <div>
                                    <MainIcons iconName="mainMike" />
                                    <p>
                                        챗봇 에이미와
                                        <br />
                                        대화해보세요!
                                    </p>
                                </div>
                                <MainIcons iconName="iconAime" />
                            </div>
                        </Link>
                        <div className="menuShadow"></div>
                        <div className="menuLight"></div>
                    </div>
                    <div className="mainMenuRow">
                        <div className="mainMenubox">
                            <Link to="/libabout">
                                <div className="innerType2">
                                    <MainIcons iconName="mainIconLib" />
                                    <p>
                                        도서관
                                        <br /> 안내
                                    </p>
                                </div>
                            </Link>
                            <div className="menuShadow"></div>
                            <div className="menuLight"></div>
                        </div>
                        <div className="mainMenubox">
                            <Link to="/libsetabout">
                                <div className="innerType2">
                                    <MainIcons iconName="mainIconSeat" />
                                    <p>
                                        도서관
                                        <br /> 좌석안내
                                    </p>
                                </div>
                            </Link>
                            <div className="menuShadow"></div>
                            <div className="menuLight"></div>
                        </div>
                    </div>
                    <div className="mainMenubox">
                        <Link to="/readbook">
                            <div className="inner">
                                <MainIcons iconName="mainIconRead" />
                                <p>
                                    도서
                                    <br />
                                    읽어주기
                                </p>
                            </div>
                        </Link>
                        <div className="menuShadow"></div>
                        <div className="menuLight"></div>
                    </div>
                </div>
            </MainBackWrap>
        </>
    );
}

export default MainPage;
