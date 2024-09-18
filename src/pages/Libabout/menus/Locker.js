import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import LockerData from "../datas/Locker/LockerData";

function Locker() {
  return (
    <SubBackWrap>
      <SubTopMenu />
      <MenusScrollFrame children={<LockerData />} />
    </SubBackWrap>
  )
}

export default Locker;
