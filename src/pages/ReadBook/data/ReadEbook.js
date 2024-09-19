import React from "react";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import Title from "../../../components/Layout/Title";
import MenusScrollFrame from "../../../components/MenusScrollFrame";
import { useParams } from "react-router-dom";
import EbookSolution from "./EbookSolution";

function ReadEbook() {
  const { title } = useParams();

  return (
    <SubBackWrap>
      <SubTopMenu />
      <Title></Title>
      <MenusScrollFrame children={<EbookSolution title={title} />} />
    </SubBackWrap>
  );
}

export default ReadEbook;
