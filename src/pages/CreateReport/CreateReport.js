import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EndoAI from "../../assets/images/EndoAI03.png";
import SenaManager from "../../assets/images/EndoAI04.png";
import { Modal } from "antd";
import { TreeSelect } from "antd";
import "antd/dist/antd.css";
import { useLocation, useNavigate } from "react-router-dom";

const CreateReport = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [snapShotData, setSnapShotData] = useState([]);

  const [isSnapShotVisible, setIsSnapShotVisible] = useState(false);

  const [snapShotId, setSnapShotId] = useState();

  const [leader, setLeader] = useState();

  const { TreeNode } = TreeSelect;

  const leaderHandle = (newValue) => {
    setLeader(newValue);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const snapShotModalHandle = () => {
    setIsSnapShotVisible(true);
  };

  const snapShotIndex = snapShotId - 1;

  const snapShotModalCancle = () => {
    setIsSnapShotVisible(false);
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

  if (!snapShotData[0]) return;

  const snapShotLength = snapShotData.length;

  let removePolyp = 0;

  snapShotData.forEach((data) => {
    if (data.is_remove) {
      removePolyp += 1;
    }
  });

  return (
    <div>
      <ResultNav>
        <SenaManagerImage onClick={goToMain} src={SenaManager} />
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
        <EndoAIIcon src={EndoAI} />
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
              <InfoContentTitle>수정 일시</InfoContentTitle>
            </TestColumn>
            <TestRow>
              <InfoContent>C00001</InfoContent>
              <InfoContent>A.B.C</InfoContent>
              <InfoContent>P00001</InfoContent>
              <InfoContent>2022/04/26</InfoContent>
              <InfoContent>00:10:06</InfoContent>
              <InfoContent>2022/04/26 11:11:11</InfoContent>
              <InfoContent>2022/08/04 22:22:22</InfoContent>
            </TestRow>
          </FinderTestInfo>
          <ManagerTestInfo>
            <TestColumn>
              <InfoContentTitle>대장 정결도</InfoContentTitle>
              <InfoContentTitle>비고</InfoContentTitle>
              <InfoContentTitle>등록 일시</InfoContentTitle>
              <InfoContentTitle>업데이트 일시</InfoContentTitle>
              <InfoContentTitle>스냅샷 갯수</InfoContentTitle>
              <InfoContentTitle>제거된 용종 갯수</InfoContentTitle>
              <InfoContentTitle>대장정결도</InfoContentTitle>
            </TestColumn>
            <TestRow>
              <InfoContent>C00001</InfoContent>
              <InfoContent>A.B.C</InfoContent>
              <InfoContent>P00001</InfoContent>
              <InfoContent>2022/04/26</InfoContent>
              <InfoContent>{snapShotLength}</InfoContent>
              <InfoContent>{removePolyp}</InfoContent>
              <InfoContentTitle>
                <TreeSelect
                  showSearch
                  style={{
                    width: "100%",
                  }}
                  value={leader}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: "auto",
                  }}
                  placeholder={leader}
                  allowClear
                  treeDefaultExpandAll
                  onChange={leaderHandle}
                >
                  <TreeNode value="상" title="상" />
                  <TreeNode value="중" title="중" />
                  <TreeNode value="하" title="하" />
                </TreeSelect>
              </InfoContentTitle>
            </TestRow>
          </ManagerTestInfo>
          <ButtonContainer>
            <NextButton onClick={goToNext}>리포트페이지로</NextButton>
            <PrevButton onClick={goToPrev}>이전페이지로</PrevButton>
          </ButtonContainer>
        </TestInfo>
        <SnapShotInfo>
          {snapShotData.map((data) => (
            <SnapShot key={data.id}>
              <SnapShotImage
                src={data.imgUrl}
                onClick={() => {
                  setSnapShotId(data.id);
                  snapShotModalHandle();
                }}
              />
              <SnapShotContainer>
                <SnapShotContent>{data.snap_shot_number}</SnapShotContent>
                <SnapShotContent>{data.test_time}</SnapShotContent>
                <input type="checkbox" defaultChecked={data.is_remove}></input>
              </SnapShotContainer>
            </SnapShot>
          ))}
          {snapShotId && (
            <Modal
              title={snapShotData[snapShotIndex].snap_shot_number}
              visible={isSnapShotVisible}
              onCancel={snapShotModalCancle}
              footer={null}
            >
              <ModalImg src={snapShotData[snapShotIndex].imgUrl} />
            </Modal>
          )}
        </SnapShotInfo>
      </ReportContainer>
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

const EndoAIIcon = styled.img`
  width: 25%;
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

const SenaManagerImage = styled.img`
  width: 23%;
  &:hover {
    cursor: pointer;
  }
`;

const ReportContainer = styled.div`
  margin: 50px 50px 150px 100px;
`;

const FinderTestInfo = styled.div`
  display: flex;
`;

const TestInfo = styled.div`
  display: flex;
  position: relative;
`;

const ManagerTestInfo = styled.div`
  display: flex;
`;

const TestColumn = styled.div`
  font-size: 17px;
`;

const TestRow = styled.div`
  font-size: 17px;
`;

const InfoContentTitle = styled.div`
  margin: 15px;
  font-weight: 700;
`;

const InfoContent = styled.div`
  margin: 15px;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: -39px;
  right: 100px;
  display: flex;
  flex-direction: row;
`;

const PrevButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 24px;
  margin: 20px;
  border: 0;
  font-weight: 700;
  display: inline-block;
  text-transform: uppercase;
  ::after {
    width: 100px;
    margin-left: 20px;
    display: block;
    content: "";
    border-bottom: solid 2px #6b6464;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const NextButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 24px;
  margin: 20px;
  border: 0;
  font-weight: 700;
  display: inline-block;
  text-transform: uppercase;
  ::after {
    width: 100px;
    margin-left: 20px;
    display: block;
    content: "";
    border-bottom: solid 2px #6b6464;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const SnapShotInfo = styled.div`
  display: flex;
  margin-top: 50px;
  overflow-y: scroll;
  height: 270px;
  ::-webkit-scrollbar {
    height: 8px;
  }

  /* 트랙 (Track) */
  ::-webkit-scrollbar-track {
    background: white;
  }

  /* 핸들 (Handle) */
  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }

  /* Hover시 핸들 (Handle) */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;

const SnapShot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const SnapShotImage = styled.img`
  width: 100px;
  height: 130px;
`;

const SnapShotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  width: 200px;
`;

const SnapShotContent = styled.div`
  display: flex;
`;

const ModalImg = styled.img`
  width: 470px;
  height: 500px;
`;

export default CreateReport;
