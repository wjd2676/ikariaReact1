import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Result = () => {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/result.json")
      .then((res) => res.json())
      .then((res) => setResultData(res));
  }, []);

  console.log(resultData);
  if (!resultData[0]) return;
  return (
    <div>
      <ResultNav>
        <IkariaIcon src="http://ikariaai.co.kr/static/images/Web/Nav/Logo_White@3x.png" />
        <SenaManagerImage>SenaManager</SenaManagerImage>
      </ResultNav>
      <ResultContainer>
        {resultData.map((data) => (
          <ResultInfo key={data.id}>
            <div>날짜 : {data.date}</div>
            <div>검사번호 : {data.test_number}</div>
            <div>환자번호 : {data.patient_number}</div>
            <div>검사자이름 : {data.doctor}</div>
            <div>검사소요시간 : {data.test_timetaken}</div>
          </ResultInfo>
        ))}
      </ResultContainer>
    </div>
  );
};

const ResultNav = styled.div`
  position: relative;
  width: 100%;
  height: 88px;
  border: 2px solid red;
`;

const IkariaIcon = styled.img`
  position: absolute;
  right: 0;
  padding: 10px;
  margin-right: 20px;
  height: 100%;
  filter: invert(100%);
`;

const SenaManagerImage = styled.div`
  font-size: 55px;
  font-weight: 500;
  margin-left: 20px;
`;

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ResultInfo = styled.div`
  width: 500px;
  height: 100%;
  margin: 40px;
`;

export default Result;
