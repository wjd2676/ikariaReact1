import React, { useState } from "react";
import styled from "styled-components";
import mainimg from "../../assets/images/main_image.jpg";
import EndoAI from "../../assets/images/EndoAI03.png";
import SenaManager from "../../assets/images/EndoAI04.png";
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
        <EndoAIImg src={EndoAI} />
        <SenaManagerImage src={SenaManager} />
        <MainDropDown roomName={roomName} setRoomName={setRoomName} />
        <ButtonContainer>
          <SearchButton onClick={goToListPage}>선택</SearchButton>
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

const EndoAIImg = styled.img`
  width: 100%;
  height: 150px;
  filter: invert(100%);
  padding: 20px;
`;

const SenaManagerImage = styled.img`
  width: 100%;
  height: 130px;
  padding: 20px;
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
