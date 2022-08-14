## **1. 프로젝트 소개**

- [Endo-Ai] Front-end Project
- 정해진 1개의 병원을 Default로 설정
- BackEnd Data 없이 MockData로만 구성되었습니다.
- PDF,카카오 공유, mail 공유 기능은 구현했지만 body값은 임시로 넣었습니다.
- 공유하는 페이지의 보안은 고려하지않고 만든 페이지입니다.

### **개발 인원 및 기간**

- 개발기간 : 2022/08/04 ~ 2022/08/10
- 개발 인원

  - 프론트엔드(1명) : 정현준

## **적용 기술 및 구현 기능**

- Main

  - DropDown 형식으로 Room을 선택할 수 있게 구현
  - Room을 state에 저장 후 검색 클릭시 pathParameter로 Room정보를 넘김
  - 초기화 버튼 클릭시 State를 초기화시킴

- Result
  - CardList 형식으로 환자 정보를 나타냄
  - 반응형 페이지로 구현하여 CardList가 max-width 에서는 총 4개의 Card를 보여줌
  - min-width 로 최소 크기를 지정
  - 병원 클릭시 병원 정보를 나타내는 modal 구현
  - GoToReport 클릭시 pathParameter로 환자 정보를 넘김
- CreateReport
  - snapShot Image 클릭시 image를 확대해서 보여주는 modal 구현
- PatientReport
  - snapshot.json의 image의 boolean 값이 true인것만 화면에 나타나게 구현
  - kakao 공유 구현
  - mail 공유 구현
  - 현재 페이지 PDF 저장 구현

### **적용 기술**

- Front-End : HTML, Styled-component, Javascript , React, antd-Library
