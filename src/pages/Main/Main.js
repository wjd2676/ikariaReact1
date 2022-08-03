import React, { useState } from "react";
import styled from "styled-components";
import mainimg from "../../assets/images/main_image.jpg";
import MainDropDown from "./MainDropDown/MainDropDown";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [hospitalName, setHospitalName] = useState(undefined);
  const [roomName, setRoomName] = useState(undefined);
  const navigate = useNavigate();
  const goToListPage = () => {
    navigate(`/Result?hospitalName=${hospitalName}roomName=${roomName}`);
  };

  return (
    <>
      <MainContainer>
        <MainContent>
          <IkariaImage src="http://ikariaai.co.kr/static/images/Web/Nav/Logo_White@3x.png" />
          <SenaManagerImage>SenaManager</SenaManagerImage>
          <MainDropDown
            hospitalName={hospitalName}
            setHospitalName={setHospitalName}
            roomName={roomName}
            setRoomName={setRoomName}
          />
          <SearchButton onClick={goToListPage}>검색</SearchButton>
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

const SenaManagerImage = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const SearchButton = styled.button`
  font-size: 25px;
`;

export default Main;
