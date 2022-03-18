import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import RU_EN from "../../RU_EN_CONST";

export default function Tags() {
  return (
    <Stack spacing={3} sx={{ width: "calc(100% - 16px)" }}>
      <Autocomplete
        multiple
        id="tags-standard"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} variant="standard" label={RU_EN.RU.taskTags} />
        )}
      />
    </Stack>
  );
}

const top100Films = [{ title: "Дом" }, { title: "Работа" }, { title: "Хобби" }];
