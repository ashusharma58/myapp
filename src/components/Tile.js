import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Tile = ({ title, handleOnClick }) => {
  return (
    <Grid
      width={120}
      height={120}
      bgcolor={"#FFFBFE"}
      pl={2}
      pr={3}
      pt={2}
      pb={5}
      borderRadius={5}
      textAlign={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => handleOnClick()}
      >
        <Typography fontSize={16} fontWeight={500}>
          {title}
        </Typography>
      </Grid>
      {/* <Grid>
        {" "}
        <Typography fontSize={14} fontWeight={400}>
          Subhead
        </Typography>
      </Grid> */}
    </Grid>
  );
};
export default Tile;
