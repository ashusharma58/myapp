import React from "react";
// import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <Box>
        {/* <img src={icons.SomethingWentWrong} alt="Something Went Wrong" /> */}
        <Typography
        // align="center"
        // type="hm"
        // component={"div"}
        // className={styles.error_Heading}
        >
          Something Went Wrong!
        </Typography>
        <Typography
        // type="body-l"
        // align="center"
        // component={"div"}
        // className={styles.error_Description}
        >
          We are facing technical difficulties at the moment. Please try again
          later.
        </Typography>
        <ButtonUnstyled variant="textButton" onClick={() => navigate("/")}>
          Go to Home Page
        </ButtonUnstyled>
      </Box>
    </BaseLayout>
  );
};
export default ErrorPage;
