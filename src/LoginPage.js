import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button, Input } from "@mui/material";
import PinInput from "react-pin-input";
import Box from "@mui/material/Box";
import { Postapi } from "./services";
import { useNavigate } from "react-router-dom";
import FloatingButton from "./components/FloatingButton";
import { BaseLayout } from "./components/BaseLayout";
import NavigationBar from "./components/NavigationBar";
import AppButton from "./components/Button";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
  resetGameSaga,
  getDeckSaga,
  drawCardsFromDeck,
  changeCardDisplay,
  setRequestToken,
} from "./actions";

const LoginPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  //   const {
  //     customerId,
  //     emailId,
  //     name,
  //     action: { getCustomerDetail },
  //   } = useContext(CustomerContext);
  //   console.log("emailId", emailId);
  const [custId, setCustId] = useState("");
  const [pin, setPin] = useState("");

  //   const userData = localStorage.getItem("customerDetail");
  //   const userDetail = JSON.parse(userData);
  //   console.log("userDetail", userDetail);

  //   useEffect(() => {
  //     if (userDetail) {
  //       window.location.reload();
  //       navigate("/home");
  //       console.log("userDetail111", userDetail);
  //     }
  //   }, [userDetail]);

  const handleSubmit = async () => {
    console.log("data", custId, pin);
    if (custId && pin) {
      const data = {
        customerId: custId,
        mpin: pin,
      };
      await Postapi("authenticate", data);
      //   const userInfo = await getCustomerDetail("authenticate", data); //await Postapi("authenticate", data);
      //   console.log("userInfo", userInfo);
      //   fetch("http://18.188.140.50/authenticate", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       customerId: custId,
      //       mpin: pin,
      //     }),
      //   })
      //     .then((data) => data.json())
      //     .then((data) => {
      //       console.log(data);
      //     })
      //     .catch((e) => console.log(e));
    }
  };
  return (
    <BaseLayout>
      <NavigationBar showSettings={false} showProfile={false} />

      <Grid mt={10} mb={35}>
        <Grid
          mb={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <TextField
            style={{ width: "320px" }}
            id="customerid"
            label="Customer ID"
            variant="outlined"
            onChange={(e) => setCustId(e.target.value)}
          />
        </Grid>
        <Grid
          mb={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TextField
            style={{ width: "320px" }}
            type={"password"}
            id="mpin"
            label="MPIN"
            variant="outlined"
            onChange={(e) => setPin(e.target.value)}
          />
        </Grid>
      </Grid>
      {/* <Box>
          <Button onClick={handleSubmit}>Login</Button>
        </Box> */}
      {/* <FloatingButton /> */}
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={4}
      >
        <AppButton
          text={t("submit")}
          handleOnClick={() => {
            navigate("/home");
          }}
        />
      </Grid>
    </BaseLayout>
  );
};
const mapStateToProps = (state) => ({
  deck: state.helperReducer.deck,
  players: state.helperReducer.players,
  gameStatus: state.helperReducer.gameStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getDeckSaga: () => dispatch(getDeckSaga()),
  resetGameSaga: () => dispatch(resetGameSaga()),
  drawCardsFromDeck: (id) => dispatch(drawCardsFromDeck(id)),
  changeCardDisplay: (data) => dispatch(changeCardDisplay(data)),
});

export default LoginPage;
// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
