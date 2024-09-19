import React from "react";
import { SubBackWrap } from "../../components/Layout/BackWrap";
import { DepthTopMenu } from "../../components/Layout/TopMenu";
import Title from "../../components/Layout/Title";
import MenusScrollFrame from "../../components/MenusScrollFrame";
import ReadBookData from "./data/ReadBookData";

function readbook() {
  return (
    <SubBackWrap>
      <DepthTopMenu />
      <Title>도서 읽어주기</Title>
      <MenusScrollFrame children={<ReadBookData />} />
    </SubBackWrap>
  );
}

export default readbook;
