import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ variant, lable, disabled, action }) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={action} disabled={disabled} variant={variant}>
        {lable}
      </Button>
    </Stack>
  );
}
