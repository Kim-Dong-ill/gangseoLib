import React from "react";
import a1 from "../../assets/icons/Component 3.svg";
import a2 from "../../assets/icons/Component 4.svg";
import a3 from "../../assets/icons/Component 5.svg";
import a4 from "../../assets/icons/Component 6.svg";
import a5 from "../../assets/icons/Component 7.svg";
import a6 from "../../assets/icons/Component 8.svg";
import a7 from "../../assets/icons/Component 9.svg";
import a8 from "../../assets/icons/Component 10.svg";
import a9 from "../../assets/icons/Component 11.svg";
import a10 from "../../assets/icons/Component 12.svg";
import a11 from "../../assets/icons/Component 13.svg";

function libabout() {
  const menuList = [
    { title: "자료기증 관련 안내", icon: a1 },
    { title: "와이파이 안내", icon: a2 },
    { title: "희망도서 신청 안내", icon: a3 },
    { title: "택배 대출 서비스", icon: a4 },
    { title: "사물함 안내", icon: a5 },
    { title: "대출증, 회원증 안내", icon: a6 },
    { title: "복사, 인쇄, 출력, 스캔", icon: a7 },
    { title: "식당, 매점 운영 안내", icon: a8 },
    { title: "프로그램 안내", icon: a9 },
    { title: "주차장 이용 안내", icon: a10 },
    { title: "시설 이용 안내", icon: a11 },
  ];
  return (
    <div className="background frame libabout">
      <div className="container">
        {menuList.map((item, idx) => {
          return (
            <div key={idx} className="box">
              <div className="title">{item.title}</div>
              <div className="icon">
                <img src={item.icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default libabout;
