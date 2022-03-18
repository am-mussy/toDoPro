import styled from "@emotion/styled";
import React from "react";
import Icon from "@mui/material/Icon";
import THEAM from "../../theam";
import { useSelector, useDispatch } from "react-redux";

const AddCardWrapper = styled.div({
  width: 180,
  height: 180,
  borderRadius: 10,
  backgroundColor: THEAM.COLOR.TODO.CARD,

  ":hover": {
    backgroundColor: THEAM.COLOR.TODO.HOVER_TASK,
    cursor: "pointer",
  },
});

const IconWrapper = styled(Icon)({
  display: "block",
  margin: "0 auto",
  marginTop: 72,
  color: THEAM.COLOR.GLOBAL.fontColor,
});

function AddCard() {
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch({
      type: "ADD_TASK",
      payloader: {
        Title: "Test Title",
        Task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic quia",
      },
    });
  };
  return (
    <AddCardWrapper
      onClick={() => {
        addTask();
      }}
    >
      <IconWrapper fontSize="large">add</IconWrapper>
    </AddCardWrapper>
  );
}

export default AddCard;
