import React from "react";
import { SubBackWrap } from "../../components/Layout/BackWrap";
import { DepthTopMenu } from "../../components/Layout/TopMenu";
import Title from "../../components/Layout/Title";
import MenusScrollFrame from "../../components/MenusScrollFrame";
import ChatbotData from "./data/ChatbotData";

function Chatbot() {
  return (
    <SubBackWrap>
      <DepthTopMenu />
      <Title>
        챗봇
        <span style={{ fontSize: 72, fontWeight: "bolder", color: "#EE2B74" }}>
          &nbsp;에이미
        </span>
        와 대화해보세요!
      </Title>
      <MenusScrollFrame children={<ChatbotData />} />
    </SubBackWrap>
  );
}

export default Chatbot;
