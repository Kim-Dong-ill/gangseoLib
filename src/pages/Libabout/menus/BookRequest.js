import React from "react";
import "../../../assets/css/sass/bookRequest.scss";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import BookRequestData from "../datas/BookRequest/BookRequestData";
function BookRequest() {
  return (
    <SubBackWrap>
      <SubTopMenu />
      <MenusScrollFrame children={<BookRequestData />} />
    </SubBackWrap>
  );
}

export default BookRequest;
