import React from "react";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import DeliveryLoanData from "../datas/DeliveryLoan/DeliveryLoanData";

function DeliveryLoan() {
  return (
    <SubBackWrap>
      <SubTopMenu />
      <MenusScrollFrame children={<DeliveryLoanData />} />
    </SubBackWrap>
  );
}

export default DeliveryLoan;
