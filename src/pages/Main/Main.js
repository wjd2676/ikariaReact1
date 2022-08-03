import React from "react";
import styled from "styled-components";
import mainimg from "../../assets/images/main_image.jpg";
import MainDropDown from "./MainDropDown/MainDropDown";

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainContent>
          <IkariaImage src="http://ikariaai.co.kr/static/images/Web/Nav/Logo_White@3x.png" />
          <SenaManagerImage>SenaManagerImage</SenaManagerImage>
          <MainDropDown />
        </MainContent>
        <SideContainer>
          <MainImage src={mainimg} />
        </SideContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10%;
`;

const SideContainer = styled.div`
  width: 50%;
  height: 500px;
  border: red 3px solid;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MainContent = styled.div`
  width: 30%;
  border: 3px green solid;
`;

const IkariaImage = styled.img`
  filter: invert(100%);
  width: 100%;
  padding: 40px;
`;

const SenaManagerImage = styled.div``;

export default Main;
