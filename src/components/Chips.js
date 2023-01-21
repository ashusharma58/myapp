import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Chips({ text, value, handleClick, isSelected }) {
  const handleOnClick = (value) => {
    // console.info("You clicked the Chip.", value);
    handleClick(value);
  };

  return (
    // <Stack direction="row" spacing={1}>
    <Chip
      label={text}
      value={value}
      onClick={() => handleOnClick(value)}
      style={{
        width: 120,
        height: 48,
        margin: 10,
        backgroundColor: isSelected ? "#6750A4" : "#FFFBFE",
        color: isSelected ? "#fff" : "#6750A4",
      }}
    />
  );
}
