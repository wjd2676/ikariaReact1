import React from "react";
import { TreeSelect } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

const { TreeNode } = TreeSelect;

const MainDropDown = (props) => {
  const { hospitalName, setHospitalName, roomName, setRoomName } = props;

  const hospitalNameHandle = (newValue) => {
    setHospitalName(newValue);
  };

  const roomNameHandle = (newValue) => {
    setRoomName(newValue);
  };

  return (
    <DropDownContainer>
      <TreeSelect
        showSearch
        style={{
          width: "90%",
          marginTop: "20px",
        }}
        value={hospitalName}
        dropdownStyle={{
          maxHeight: 400,
          overflow: "auto",
        }}
        placeholder="병원 선택"
        allowClear
        treeDefaultExpandAll
        onChange={hospitalNameHandle}
      >
        <TreeNode value="병원이름1" title="병원이름1" />
        <TreeNode value="병원이름2" title="병원이름2" />
        <TreeNode value="병원이름3" title="병원이름3" />
        <TreeNode value="병원이름4" title="병원이름4" />
      </TreeSelect>
      {hospitalName && (
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
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainDropDown;
