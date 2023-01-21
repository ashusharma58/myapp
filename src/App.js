import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import MultiLanguage from "./components/MultiLanguage";
import SpeechRecognitionComponent from "./components/SpeechReconition";
import Speech from "react-speech";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BaseLayout } from "./components/BaseLayout";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import NavigationBar from "./components/NavigationBar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Tile from "./components/Tile";
import FloatingButton from "./components/FloatingButton";
import AppButton from "./components/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://18.188.140.50/version")
      .then(async (data) => {
        await data;
        console.log(data.body);
      })
      .catch((e) => console.log(e));
  }, []);
  // eslint-disable-next-line no-sparse-arrays
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  const [showBalance, setBalance] = useState(false);

  return (
    <BaseLayout>
      <NavigationBar showBack={true} showSettings={true} />
      <Grid bgcolor={"#EEE8F4"}>
        <Grid
          height={180}
          // bgcolor={"#EEE8F4"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            width={264}
            // height={20}
            style={{ padding: "15px" }}
            border={"1px solid #CAC4D0"}
            borderRadius={5}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Grid style={{ width: 46, height: 46 }}>
              <Avatar
                src="/broken-image.jpg"
                style={{ width: 46, height: 46 }}
              />
            </Grid>
            <Grid>
              <Typography fontWeight={500} fontSize={16}>
                {" "}
                Welcome, Meena
              </Typography>
              <Grid>Account - xxxx xxxx 8756</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid display={"flex"} justifyContent={"center"} mb={5}>
          <Grid width={"200px !important"} style={{ marginLeft: "-70px" }}>
            <AppButton
              text={showBalance ? "₹1,00,000" : t("balance")}
              handleOnClick={() => {
                setBalance(!showBalance);

                speak({
                  text: "You have rupees one laakh in your account number ending with 8756",
                });
                // navigate("/login");
              }}
            />
          </Grid>
        </Grid>
        <Grid
          height={705}
          bgcolor={"#F2F2F2"}
          borderRadius={"20px 20px 0px 0px"}
          pb={2}
        >
          {/* Tiles */}
          <Grid
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            padding={5}
          >
            <Tile
              title={t("My Account")}
              handleOnClick={() => navigate("/accounts")}
            />
            <Tile
              title={t("Fund Transfer")}
              handleOnClick={() => navigate("/fund-transfer")}
            />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            pl={5}
            pr={5}
          >
            <Tile
              title={t("Investment")}
              handleOnClick={() => navigate("/investment")}
            />
            <Tile
              title={t("Modern Payments")}
              handleOnClick={() => navigate("/modern-payments")}
            />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            mt={4}
            ml={5}
            mr={5}
            border={"1px solid #CAC4D0;"}
          >
            {" "}
          </Grid>
          {/* Features */}
          <Grid mt={4}>
            <Grid display={"flex"} justifyContent={"center"}>
              <Grid
                width={312}
                height={60}
                bgcolor={"#FFFBFE"}
                borderRadius={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography>{t("Support & Services")}</Typography>
                {/* <Grid>Special Features</Grid> */}
              </Grid>
            </Grid>
            <Grid display={"flex"} justifyContent={"center"} mt={3}>
              <Grid
                width={312}
                height={60}
                bgcolor={"#FFFBFE"}
                borderRadius={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography>{t("Manage Nominees")}</Typography>

                {/* <Grid>Special Features</Grid> */}
              </Grid>
            </Grid>
            <Grid display={"flex"} justifyContent={"center"} mt={3}>
              <Grid
                width={312}
                height={60}
                bgcolor={"#FFFBFE"}
                borderRadius={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={() =>
                  window.open("https://willeffect.in/affiliate-home/3")
                }
              >
                <Typography>{t("Will Writing")}</Typography>

                {/* <Grid>Special Features</Grid> */}
              </Grid>
            </Grid>
          </Grid>
          <SpeechRecognitionComponent />

          {/* <FloatingButton /> */}
        </Grid>
      </Grid>
      {/* 
        text to speech
        <div>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 200 }}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <ButtonUnstyled onClick={() => speak({ text: value })}>
            Speak
          </ButtonUnstyled>
        </div> */}
    </BaseLayout>
  );
}
export default App;
