import React, { useState } from "react";
import styled from "styled-components";
import mainimg from "../../assets/images/main_image.jpg";
import MainDropDown from "./MainDropDown/MainDropDown";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [roomName, setRoomName] = useState(undefined);
  const navigate = useNavigate();

  const goToListPage = () => {
    if (roomName) {
      navigate(`/Result?roomName=${roomName}`);
    } else return alert("병원 이름과 방번호를 선택해주세요");
  };

  const initButton = () => {
    setRoomName(undefined);
  };

  return (
    <MainContainer>
      <MainContent>
        <IkariaImage src="http://ikariaai.co.kr/static/images/Web/Nav/Logo_White@3x.png" />
        <SenaManagerImage>SenaManager</SenaManagerImage>
        <MainDropDown roomName={roomName} setRoomName={setRoomName} />
        <ButtonContainer>
          <SearchButton onClick={goToListPage}>검색</SearchButton>
          <SearchButton onClick={initButton}>초기화</SearchButton>
        </ButtonContainer>
      </MainContent>
      <SideContainer>
        <MainImage src={mainimg} />
      </SideContainer>
    </MainContainer>
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
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MainContent = styled.div`
  width: 30%;
`;

const IkariaImage = styled.img`
  filter: invert(100%);
  width: 100%;
  padding: 40px;
`;

const SenaManagerImage = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 100%;
  height: 35px;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 35px;
  font-size: 20px;
  background-color: white;
  opacity: 0.4;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

export default Main;
