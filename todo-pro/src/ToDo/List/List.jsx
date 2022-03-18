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

function List() {
  console.log(useSelector((state) => state.todo));
  return (
    <Wrap>
      <ListWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <AddCard />
      </ListWrapper>
    </Wrap>
  );
}

export default List;
