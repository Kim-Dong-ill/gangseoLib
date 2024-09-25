import React from "react";
import MainIcons from "../components/Icons/MainIcons";
import { MainBackWrap } from "../components/Layout/BackWrap";
import SmoothLink from "../components/Layout/SmoothLink";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // 언어 변경
  };
  return (
    <>
      <MainBackWrap>
        <div>
          <button onClick={() => changeLanguage("korean")}>한국어</button>
          <button onClick={() => changeLanguage("english")}>English</button>
          <button onClick={() => changeLanguage("chinese")}>中文</button>
          <button onClick={() => changeLanguage("japanese")}>日本語</button>
          <button onClick={() => changeLanguage("vietnamese")}>
            Tiếng Việt
          </button>
        </div>
        <h1>Main Page</h1>
        <div className="mainMenuWrap">
          <div className="mainMenubox">
            <SmoothLink to="/chatbot">
              <div className="innerPoint">
                <div>
                  <MainIcons iconName="mainMike" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("챗봇 에이미와 대화해보세요!").replace(
                        "대화해보세요!",
                        "<br />대화해보세요!"
                      ),
                    }}
                  />
                </div>
                <MainIcons iconName="iconAime" />
              </div>
            </SmoothLink>
            <div className="menuShadow"></div>
            <div className="menuLight"></div>
          </div>
          <div className="mainMenuRow">
            <div className="mainMenubox">
              <SmoothLink to="/libabout">
                <div className="innerType2">
                  <MainIcons iconName="mainIconLib" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("도서관 안내").replace("안내", "<br />안내"),
                    }}
                  ></p>
                </div>
              </SmoothLink>
              <div className="menuShadow"></div>
              <div className="menuLight"></div>
            </div>
            <div className="mainMenubox">
              <SmoothLink to="/libsetabout">
                <div className="innerType2">
                  <MainIcons iconName="mainIconSeat" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("도서관 좌석안내").replace(
                        "좌석안내",
                        "<br />좌석안내"
                      ),
                    }}
                  ></p>
                </div>
              </SmoothLink>
              <div className="menuShadow"></div>
              <div className="menuLight"></div>
            </div>
          </div>
          <div className="mainMenuRow">
            <div className="mainMenubox">
              <SmoothLink to="/readbook">
                <div className="innerType2">
                  <MainIcons iconName="mainIconRead" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("도서관 읽어주기").replace(
                        "읽어주기",
                        "<br />읽어주기"
                      ),
                    }}
                  ></p>
                </div>
              </SmoothLink>
              <div className="menuShadow"></div>
              <div className="menuLight"></div>
            </div>
            <div className="mainMenubox">
              <SmoothLink to="/serchbook">
                <div className="innerType2">
                  <MainIcons iconName="mainIconSearch" />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("도서 검색").replace("검색", "<br />검색"),
                    }}
                  ></p>
                </div>
              </SmoothLink>
              <div className="menuShadow"></div>
              <div className="menuLight"></div>
            </div>
          </div>
          {/* 한개짜리 */}
          {/* <div className="mainMenubox">
                        <SmoothLink to="/readbook">
                            <div className="inner">
                                <MainIcons iconName="mainIconRead" />
                                <p>
                                    도서
                                    <br />
                                    읽어주기
                                </p>
                            </div>
                        </SmoothLink>
                        <div className="menuShadow"></div>
                        <div className="menuLight"></div>
                    </div> */}
          {/* 한개짜리 */}
        </div>
      </MainBackWrap>
    </>
  );
}

export default MainPage;
