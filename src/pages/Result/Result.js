import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const [resultData, setResultData] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const location = useLocation();

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  const decodeUri = decodeURI(location.search);

  const hospitalNameStart = decodeUri.indexOf(`=`);
  const hospitalNameEnd = decodeUri.indexOf("&");
  const hospitalName = decodeUri.slice(hospitalNameStart + 1, hospitalNameEnd);

  const roomNumber = decodeUri.slice(hospitalNameEnd + 10);

  const goToReport = (e) => {
    // console.log(e);
    navigate(`/CreateReport/${location.search}`);
  };

  useEffect(() => {
    fetch("http://localhost:3000/data/result.json")
      .then((res) => res.json())
      .then((res) => setResultData(res));
  }, []);

  if (!resultData[0]) return;
  return (
    <div>
      <ResultNav>
        <SenaManagerImage onClick={goToMain}>SenaManager</SenaManagerImage>
        <SearchInfo>
          <HospitalInfo onClick={showModal}>{hospitalName}</HospitalInfo>
          <div>{roomNumber}</div>
        </SearchInfo>
        <Modal
          title={hospitalName}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <p>
            병원 주소 : 서울특별시 종로구 대학로 101(연건동 28번지)
            서울대학교병원
          </p>
          <p>병원 연락처 : 111-1111-1111 </p>
        </Modal>
        <IkariaIcon src="http://ikariaai.co.kr/static/images/Web/Nav/Logo_White@3x.png" />
      </ResultNav>
      <ResultContainer>
        {resultData.map((data) => (
          <ResultInfo key={data.id}>
            <div>날짜 : {data.date}</div>
            <div>검사번호 : {data.test_number}</div>
            <div>환자번호 : {data.patient_number}</div>
            <div>검사자이름 : {data.doctor}</div>
            <div>검사소요시간 : {data.test_timetaken}</div>
            <GoToReport onClick={() => goToReport(data.id)}>
              gotoReport
            </GoToReport>
          </ResultInfo>
        ))}
      </ResultContainer>
    </div>
  );
};

const ResultNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 88px;
  border-bottom: 2px solid gray;
`;

const IkariaIcon = styled.img`
  padding: 10px;
  margin-right: 20px;
  height: 100%;
  filter: invert(100%);
`;

const SearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;

  width: 200px;
  height: 100%;
`;

const HospitalInfo = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const SenaManagerImage = styled.div`
  font-size: 55px;
  font-weight: 500;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const ResultInfo = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
  margin: 40px;
  padding: 20px;
  border: 1px solid #c9c7c7;
  background-color: #c9c7c7;
  border-radius: 16px;
  box-shadow: inset 0 0 8px #6b6565;
`;

const GoToReport = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 100px;
  height: 35px;
  background-color: white;
  opacity: 0.4;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

export default Result;
