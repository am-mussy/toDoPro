import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import THEAM from "../../theam";
import TodoModal from "../ToDoModal/ToDoModal";

const CardWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  width: 180,
  height: 180,
  maxWidth: 180,
  maxHeight: 180,
  borderRadius: 10,
  overflow: "hidden",
  ":hover > div:first-child ": {
    backgroundColor: THEAM.COLOR.TODO.HOVER_TITLE,
    cursor: "pointer",
  },
  ":hover > div:last-child ": {
    backgroundColor: THEAM.COLOR.TODO.HOVER_TASK,
    cursor: "pointer",
  },
});

const TitleWrapper = styled.div({
  textAlign: "center",
  paddingTop: 10,
  borderRadius: "10px 10px 0px 0px",
  backgroundColor: THEAM.COLOR.TODO.TITLE_BG,
  fontSize: "18px",
  fontWeight: "bold",
});

const Title = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};

const TaskWrapper = styled.div({
  textAlign: "center",
  height: "100%",
  backgroundColor: THEAM.COLOR.TODO.CARD,
  fontSize: "14px",
  padding: 10,
  borderRadius: "0px 0px 10px 10px",
});

const Task = ({ task }) => {
  return <TaskWrapper>{task}</TaskWrapper>;
};

function Card({ title, task }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <CardWrapper
        onClick={() => {
          setModalActive(true);
        }}
      >
        <Title title={title} />
        <Task task={task} />
      </CardWrapper>
      <TodoModal active={modalActive} setActive={setModalActive}></TodoModal>
    </>
  );
}

export default Card;
