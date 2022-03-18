import styled from "@emotion/styled";
import React from "react";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import { useSelector, useDispatch } from "react-redux";

const ListWrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  margin: 10,
  gap: 10,
});

const Wrap = styled.div({
  margin: "0 auto",
  marginTop: 100,
});

const Arr = [
  <Card title={"hell"} task={"AAAAAAAAAAAAAAAAA"} />,
  <Card />,
  <Card />,
  <Card />,
];

function List() {
  let todoArr = useSelector((state) => state.todo);
  let TASK;
  if (todoArr) {
    TASK = todoArr.map((v, i) => {
      console.log({ v }, { i });
      return <Card title={todoArr[i].Title} task={todoArr[i].Task} />;
    });
  }
  console.log(useSelector((state) => state.todo));
  return (
    <Wrap>
      <ListWrapper>
        {TASK}
        <AddCard />
      </ListWrapper>
    </Wrap>
  );
}

export default List;
