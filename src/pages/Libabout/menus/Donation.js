import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import DonationData from "../datas/Donation/DonationData";
function Donation() {
  return (
    <SubBackWrap>
      <SubTopMenu />
      <MenusScrollFrame children={<DonationData />} />
    </SubBackWrap>
  );
}

export default Donation;
