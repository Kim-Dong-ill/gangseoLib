import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import PrintingData from "../datas/Printing/PrintingData";

function Printing() {
  return (
    <SubBackWrap>
      <SubTopMenu />
      <MenusScrollFrame children={<PrintingData />} />
    </SubBackWrap>
  );
}

export default Printing;
