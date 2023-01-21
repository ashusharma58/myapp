import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const AppButton = ({ text, handleOnClick, style }) => {
  return (
    <Button
      onClick={() => handleOnClick()}
      style={{
        height: 50,
        width: 312,
        backgroundColor: "#6750A4",
        borderRadius: 100,
        color: "#fff",
      }}
    >
      {" "}
      {text}
    </Button>
  );
};

export default AppButton;
