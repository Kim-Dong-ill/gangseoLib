import React from "react";
import { SubBackWrap } from "../../components/Layout/BackWrap";
import { DepthTopMenu } from "../../components/Layout/TopMenu";
import SwiperComponent from "../../components/Contents/SwiperComponent";

function readbook() {
  return (
    <SubBackWrap>
      <DepthTopMenu />
      <div className="subContentWrap">
        {/* <TabContents></TabContents> */}
        <SwiperComponent
          mainTitle={"도서관 좌석 안내"}
          // tabs={tabs}
          // data={pageData}
        />
      </div>
    </SubBackWrap>
  );
}

export default readbook;
