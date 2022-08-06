import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const CreateReport = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [snapShotData, setSnapShotData] = useState([]);

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

  const goToPrev = () => {
    navigate(`/Result${decodeUri}`);
  };

  const goToNext = () => {
    navigate(`/PatientReport/${decodeUri}`);
  };

  const decodeUri = decodeURI(location.search);

  const roomNumberStart = decodeUri.indexOf(`=`);
  const roomNumber = decodeUri.slice(roomNumberStart + 1);

  useEffect(() => {
    fetch("http://localhost:3000/data/snapshot.json")
      .then((res) => res.json())
      .then((res) => setSnapShotData(res));
  }, []);

  return (
    <div>
      <ResultNav>
        <SenaManagerImage onClick={goToMain}>SenaManager</SenaManagerImage>
        <SearchInfo>
          <HospitalInfo onClick={showModal}>서울대학교병원</HospitalInfo>
          <div>{roomNumber}</div>
        </SearchInfo>
        <Modal
          title="서울대학교병원"
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
        <IkariaIcon src="http://endoai.co.kr/static/common/assets/logo.png" />
      </ResultNav>
      <ReportContainer>
        <TestInfo>
          <FinderTestInfo>
            <TestColumn>
              <InfoContentTitle>검사ID</InfoContentTitle>
              <InfoContentTitle>검사자 이름</InfoContentTitle>
              <InfoContentTitle>환자 번호</InfoContentTitle>
              <InfoContentTitle>검사 일시</InfoContentTitle>
              <InfoContentTitle>검사 소요 시간</InfoContentTitle>
              <InfoContentTitle>등록 일시</InfoContentTitle>
            </TestColumn>
            <TestRow>
              <InfoContent>C00001</InfoContent>
              <InfoContent>A.B.C</InfoContent>
              <InfoContent>P00001</InfoContent>
              <InfoContent>2022/04/26</InfoContent>
              <InfoContent>00:10:06</InfoContent>
              <InfoContent>2022/04/26 11:11:11</InfoContent>
            </TestRow>
          </FinderTestInfo>
          <ManagerTestInfo>
            <TestColumn>
              <InfoContentTitle>대장 정결도</InfoContentTitle>
              <InfoContentTitle>비고</InfoContentTitle>
              <InfoContentTitle>등록 일시</InfoContentTitle>
              <InfoContentTitle>업데이트 일시</InfoContentTitle>
            </TestColumn>
            <TestRow>
              <InfoContent>C00001</InfoContent>
              <InfoContent>A.B.C</InfoContent>
              <InfoContent>P00001</InfoContent>
              <InfoContent>2022/04/26</InfoContent>
            </TestRow>
          </ManagerTestInfo>
          <ButtonContainer>
            <PrevButton onClick={goToPrev}>이전페이지로</PrevButton>
            <NextButton onClick={goToNext}>리포트페이지로</NextButton>
          </ButtonContainer>
        </TestInfo>
        <SnapShotInfo>
          {snapShotData.map((data) => (
            <SnapShot key={data.id}>
              <SnapShotImage />
              <SnapShotContainer>
                <SnapShotContent>{data.snap_shot_number}</SnapShotContent>
                <SnapShotContent>{data.test_time}</SnapShotContent>
                <SnapShotContent>
                  용종 탐지 여부 : {data.detect_polyp}
                </SnapShotContent>
                <SnapShotContent>
                  용종 제거 여부 : {data.remove_polyp}
                </SnapShotContent>
              </SnapShotContainer>
            </SnapShot>
          ))}
        </SnapShotInfo>
      </ReportContainer>
      <Footer />
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

const ReportContainer = styled.div`
  margin-top: 100px;
  margin-left: 150px;
`;

const FinderTestInfo = styled.div`
  display: flex;
`;

const TestInfo = styled.div`
  display: flex;
`;

const ManagerTestInfo = styled.div`
  display: flex;
`;

const TestColumn = styled.div`
  font-size: 22px;
`;

const TestRow = styled.div`
  font-size: 22px;
`;

const InfoContentTitle = styled.div`
  margin: 15px;
  font-weight: 700;
`;

const InfoContent = styled.div`
  margin: 15px;
  font-weight: 300;
`;

const ButtonContainer = styled.div``;

const PrevButton = styled.button``;

const NextButton = styled.button``;

const SnapShotInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 55px;
`;

const SnapShot = styled.div`
  display: flex;
  margin-top: 50px;
`;

const SnapShotImage = styled.div`
  border: 2px solid green;
  width: 200px;
  height: 200px;
`;

const SnapShotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  width: 200px;
  margin: 15px 15px;
`;

const SnapShotContent = styled.div`
  display: flex;
`;
const Footer = styled.div`
  width: 100%;
  height: 100px;
`;
export default CreateReport;
