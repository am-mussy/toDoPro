import styled from "@emotion/styled";
import React from "react";
import List from "./List/List";
import TimeLine from "./TimeLine/TimeLine";

const Wrapper = styled.div({});

const TimeLineStyled = styled(TimeLine)({
  position: "absolute",
});

function ToDo() {
  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
}

export default ToDo;
