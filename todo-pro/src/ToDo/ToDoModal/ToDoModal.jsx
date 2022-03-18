import React from "react";
import styled from "@emotion/styled";
import Modal from "../../Modal/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RU_EN from "../../RU_EN_CONST";
import THEAM from "../../theam";
import Autocomplete from "./Autocomplete";
import Button from "./Button";

function ToDoModal({ active, setActive, children, width }) {
  const BoxStyled = styled(Box)({
    display: "grid",
    width: 400,
  });

  const AutocompleteStyled = styled(Autocomplete)({
    "div:last-child": {
      width: "100%",
    },
    "& label.Mui-focused": {
      color: THEAM.COLOR.GLOBAL.fontColor,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: THEAM.COLOR.POPUP.TITLE_TASK_FOCUS,
      },
    },
  });

  const ButtonWrapper = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  });

  const ModalStyled = styled(Modal)({
    backgroundColor: THEAM.COLOR.POPUP.backGroundColor,
    color: "red",
  });

  const TextFieldStyled = styled(TextField)({
    "& label.Mui-focused": {
      color: THEAM.COLOR.GLOBAL.fontColor,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: THEAM.COLOR.POPUP.TITLE_TASK_FOCUS,
      },
    },
  });

  return (
    <ModalStyled active={active} setActive={setActive} width={width}>
      <BoxStyled
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextFieldStyled
          id="outlined-basic"
          label={RU_EN.RU.taskTileField}
          variant="outlined"
        />
        <TextFieldStyled
          id="outlined-basic"
          label={RU_EN.RU.taskDescription}
          multiline
          rows={4}
          size="small"
          variant="outlined"
        />
        <AutocompleteStyled />
        <ButtonWrapper>
          <Button
            action={() => {
              setActive(false);
            }}
            lable={RU_EN.RU.taskBackButton}
            variant={"outlined"}
          />
          <Button lable={RU_EN.RU.taskDoneButton} variant={"contained"} />
        </ButtonWrapper>
      </BoxStyled>
    </ModalStyled>
  );
}

export default ToDoModal;
