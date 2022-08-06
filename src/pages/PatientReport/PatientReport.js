import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useScript } from "../../hook";
import { useEffect } from "react";
import html2canvas from "html2canvas";
import KaKaoButton from "../../assets/images/KaKaoButton.png";
import PdfButton from "../../assets/images/pdfIcon.png";
import GmailButton from "../../assets/images/gmailIcon.png";
import { EmailShareButton } from "react-share";

const PatientReport = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const goToPrev = () => {
    navigate(`/CreateReport/${location.search}`);
  };
  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  const currentUrl = "http://localhost:3000" + window.location.pathname;

  const ReportUrl = window.location.href;

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("2e862a308e93704d6414d61d8159dcc1");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  const onCapture = () => {
    console.log("onCapture");
    html2canvas(document.getElementById("Report")).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
    });
  };

  const onSaveAs = (uri, fileName) => {
    console.log("onSaveAs");
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = fileName;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PatientReportContainer>
      <div id="Report">
        <ResultNav>
          <SenaManagerImage>SenaManager</SenaManagerImage>
          <NavInfoContainer>
            <NavInfo>
              <NavInfoTitle>Organisation :</NavInfoTitle>
              <NavInfoContent>TemplateLibrary</NavInfoContent>
            </NavInfo>
            <NavInfo>
              <NavInfoTitle>Project :</NavInfoTitle>
              <NavInfoContent>Example Template Project</NavInfoContent>
            </NavInfo>
            <NavInfo>
              <NavInfoTitle>Team :</NavInfoTitle>
              <NavInfoContent>Example Team</NavInfoContent>
            </NavInfo>
          </NavInfoContainer>
          <NavInfoContainer>
            <NavInfo>
              <NavInfoTitle>Template ID :</NavInfoTitle>
              <NavInfoContent>DP-COM-0028</NavInfoContent>
            </NavInfo>
            <NavInfo>
              <NavInfoTitle>Template Version :</NavInfoTitle>
              <NavInfoContent> 2 </NavInfoContent>
            </NavInfo>
            <NavInfo>
              <NavInfoTitle>Form Created :</NavInfoTitle>
              <NavInfoContent>Friday,5,August,2022</NavInfoContent>
            </NavInfo>
          </NavInfoContainer>
          {/* <IkariaIcon src="http://ikariaai.co.kr/static/images/Web/Nav/Logo_White@3x.png" /> */}
        </ResultNav>
        <ReportTitle>SenaManager Report</ReportTitle>
        <ReportContainer>
          <ReportContent>
            <ReportRow>Automated Form Number</ReportRow>
            <ReportCoulmn>
              Template Library-Example Template Project-Example
              Team-DP-COM-00289-1
            </ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>Date of Visit</ReportRow>
            <ReportCoulmn>Friday,05 August 2022,11:11:11</ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>Project</ReportRow>
            <ReportCoulmn>Camden Road Upgrade</ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>Site Visit Conducted By</ReportRow>
            <ReportCoulmn>JungHyunJun</ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>Project No.</ReportRow>
            <ReportCoulmn>CC-0124</ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>Contractor</ReportRow>
            <ReportCoulmn>Dag Contracting</ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>SiteAdress</ReportRow>
            <ReportCoulmn>
              101, Daehak-ro, Jongno-gu, Seoul, Republic of Korea
            </ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>SnapShots</ReportRow>
            <ReportCoulmn>
              <ReportSnapshots>
                <ReportSnapshot />
                <ReportSnapshot />
                <ReportSnapshot />
                <ReportSnapshot />
                <ReportSnapshot />
              </ReportSnapshots>
            </ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>Site Condition and Work in Progress</ReportRow>
            <ReportCoulmn>
              Working-in-progress
              <ReportLitag>
                Work continues to be on schedule and on budget
              </ReportLitag>
              <ReportLitag>
                Zone 1 tarmac complete, with road barriers to be installed next
                week. Barriers hav been delivered.
              </ReportLitag>
              <ReportLitag>
                Will be open to traffic on Zone 1 as scheduled
              </ReportLitag>
              Site condition
              <ReportLitag>Mostly good condition</ReportLitag>
              <ReportLitag>
                A few issues and messiness on the south side of Zone 2,which
                looks scratched together
              </ReportLitag>
              <ReportLitag>
                Hav told JHJ(PM) and he will have the labourers there tomorrow
              </ReportLitag>
            </ReportCoulmn>
          </ReportContent>
          <ReportContent>
            <ReportRow>Additional Report Details</ReportRow>
            <ReportCoulmn>
              <ReportLitag>
                Asset owner is happy with progress and cleanliness
              </ReportLitag>
              <ReportLitag>
                No Issues with communities or stakeholders. JHJ(Director) has
                managed those relationships well
              </ReportLitag>
              <ReportLitag>
                Did get one complaint from a traffic controller about a
                beigbour, which i have passed onto JHJ to pass onto the council
              </ReportLitag>
            </ReportCoulmn>
          </ReportContent>
        </ReportContainer>
      </div>
      <ReportShareContainer>
        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src={KaKaoButton}></KakaoIcon>
        </KakaoShareButton>
        <HttpToPdf onClick={onCapture}>
          <PdfIcon src={PdfButton}></PdfIcon>
        </HttpToPdf>
        <EmailShareButton subject="Report" body={ReportUrl}>
          <GmailIcon src={GmailButton}></GmailIcon>
        </EmailShareButton>
        <PrevButton onClick={goToPrev}></PrevButton>
      </ReportShareContainer>
      <ReportFooter />
    </PatientReportContainer>
  );
};

const PatientReportContainer = styled.div`
  margin: 50px;
`;

const ResultNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 88px;
  border-bottom: 2px solid gray;
  margin-bottom: 30px;
`;

// const IkariaIcon = styled.img`
//   padding: 10px;
//   margin-right: 20px;
//   height: 100%;
//   filter: invert(100%);
// `;

const NavInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const NavInfo = styled.div`
  display: flex;
`;

const NavInfoTitle = styled.div`
  font-weight: 700;
`;

const NavInfoContent = styled.div`
   ;
`;

const SenaManagerImage = styled.div`
  font-size: 45px;
  font-weight: 500;
  margin-left: 20px;
`;

const ReportTitle = styled.div`
  font-size: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid gray;
  width: 400px;
`;

const ReportSnapshots = styled.div`
  display: flex;
`;

const ReportSnapshot = styled.div`
  border: 1px solid green;
  width: 100px;
  height: 100px;
  margin-right: 15px;
`;

const ReportLitag = styled.li``;

const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ReportContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const ReportRow = styled.div`
  width: 150px;
  font-size: 22px;
  font-weight: 700;
  margin: 10px 15px;
`;

const ReportCoulmn = styled.div`
  margin: 10px 0;
  font-size: 18px;
`;

const ReportShareContainer = styled.div`
  margin: 100px;
`;

const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 24px;
  margin: 20px;
`;

const HttpToPdf = styled.button`
  cursor: pointer;
  border: 0;
  background: none;
`;

const PdfIcon = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 24px;
  margin: 20px;
`;

const GmailShare = styled.button`
  cursor: pointer;
`;

const GmailIcon = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 24px;
  margin: 20px;
`;

const PrevButton = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 24px;
  margin: 20px;
`;

const ReportFooter = styled.div`
  width: 100%;
  height: 88px;
  border-top: 1px solid black;
`;

export default PatientReport;
