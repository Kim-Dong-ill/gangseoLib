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
import LibaboutBtn from "../../components/LibaboutBtn";

function libabout() {
  const menuList = [
    { title: "자료기증 관련 안내", icon: a1, link: "" },
    { title: "와이파이 안내", icon: a2, link: "" },
    { title: "희망도서 신청 안내", icon: a3, link: "" },
    { title: "택배 대출 서비스", icon: a4, link: "" },
    { title: "사물함 안내", icon: a5, link: "" },
    { title: "대출증, 회원증 안내", icon: a6, link: "" },
    { title: "복사, 인쇄, 출력, 스캔", icon: a7, link: "" },
    { title: "식당, 매점 운영 안내", icon: a8, link: "" },
    { title: "프로그램 안내", icon: a9, link: "" },
    { title: "주차장 이용 안내", icon: a10, link: "" },
    { title: "시설 이용 안내", icon: a11, link: "" },
  ];
  return (
    <div className="background frame libabout">
      <div className="libContainer">
        {menuList.map((item, idx) => {
          return <LibaboutBtn key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}

export default libabout;
