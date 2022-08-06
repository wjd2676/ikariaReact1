import React from "react";
import { TreeSelect } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const { TreeNode } = TreeSelect;

const MainDropDown = (props) => {
  const { roomName, setRoomName } = props;

  const roomNameHandle = (newValue) => {
    setRoomName(newValue);
  };

  return (
    <DropDownContainer>
      <HospitalTitle> 서울대학교병원</HospitalTitle>
      <TreeSelect
        showSearch
        style={{
          width: "90%",
          marginTop: "20px",
        }}
        value={roomName}
        dropdownStyle={{
          maxHeight: 400,
          overflow: "auto",
        }}
        placeholder="방 번호 선택"
        allowClear
        treeDefaultExpandAll
        onChange={roomNameHandle}
      >
        <TreeNode value="RoomNumber1" title="RoomNumber1" />
        <TreeNode value="RoomNumber2" title="RoomNumber2" />
        <TreeNode value="RoomNumber3" title="RoomNumber3" />
        <TreeNode value="RoomNumber4" title="RoomNumber4" />
      </TreeSelect>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HospitalTitle = styled.div`
  font-weight: 700;
  font-size: 33px;
`;

export default MainDropDown;
