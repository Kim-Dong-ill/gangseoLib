import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import DonationData from "../datas/Donation/DonationData";
import Title from "../../../components/Layout/Title";
function Donation() {
  const title = "자료기증 관련 안내";
  return (
    <SubBackWrap>
      <SubTopMenu />
      <Title>{title}</Title>
      <MenusScrollFrame children={<DonationData />} title={title} />
    </SubBackWrap>
  );
}

export default Donation;
