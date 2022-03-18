import React from "react";
import styled from "@emotion/styled";
import THEAM from "../theam";

function Modal({ active, setActive, children, width }) {
  const ModalWrapper = styled.div({
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.514)",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: active ? "all" : "none",
    opacity: active ? 1 : 0,
  });

  const ModalContent = styled.div({
    padding: 20,
    borderRadius: 12,
    backgroundColor: THEAM.COLOR.POPUP.backGroundColor,
    width: width,
    transform: active ? "scale(1)" : "",
  });

  return (
    <ModalWrapper onClick={() => setActive(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
