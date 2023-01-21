import React, { useEffect, useState } from "react";
import AppButton from "./components/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chips from "./components/Chips";
import { BaseLayout } from "./components/BaseLayout";
import { useTranslation } from "react-i18next";
import NavigationBar from "./components/NavigationBar";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";

const SelectLanguage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [lang, setLang] = useState("en");
  const [isActive, setIsActive] = useState(false);
  const languages = [
    { value: "en", text: "English" },
    { value: "hi", text: "हिंदी" },
    { value: "mr", text: "मराठी" },
    { value: "or", text: "Oriya" },
    { value: "gu", text: "ગુજરાતી" },
    { value: "kn", text: "ಕನ್ನಡ" },
  ];
  useEffect(() => {}, [lang]);
  const handleChange = (data) => {
    setLang(data);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + data);
  };
  return (
    <BaseLayout>
      <NavigationBar showSettings={false} showProfile={false} />
      <Grid>
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={240}
          style={{ backgroundColor: "#EEE8F4" }}
        >
          Banner
        </Grid>

        {/* {languages.map((item, index) => {
          return (
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Chips
                text={item.text}
                value={item.value}
                handleClick={(e) => setLang(item.value)}
              />
              <Chips
                text={item.text}
                value={item.value}
                handleClick={(e) => setLang(item.value)}
              />
            </Grid>
          );
        })} */}
        <Grid
          paddingLeft={2}
          paddingRight={4}
          paddingTop={16}
          paddingBottom={2}
        >
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Chips
              isSelected={lang === "en"}
              key={"English"}
              text={"English"}
              value={"en"}
              handleClick={(data) => handleChange(data)}
            />
            <Chips
              isSelected={lang === "hi"}
              key={"Hindi"}
              text={"हिंदी"}
              value={"hi"}
              handleClick={(data) => handleChange(data)}
            />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Chips
              isSelected={lang === "mr"}
              key={"Marathi"}
              text={"मराठी"}
              value={"mr"}
              handleClick={(data) => handleChange(data)}
            />
            <Chips
              key={"Oriya"}
              text={"Oriya"}
              value={"or"}
              handleClick={(data) => handleChange(data)}
            />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Chips
              key={"Gujrati"}
              text={"ગુજરાતી"}
              value={"gu"}
              handleClick={(data) => handleChange(data)}
            />
            <Chips
              key={"Kannda"}
              text={"ಕನ್ನಡ"}
              value={"kn"}
              handleClick={(data) => handleChange(data)}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid> */}
      {/* <Box
        width={300}
        gridColumn={4}
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"nowrap"}
      >
        {languages.map((item, index) => {
          return (
            <Chips
              text={item.text}
              value={item.value}
              handleClick={(e) => setLang(item.value)}
            />
          );
        })}
      </Box> */}
      {/* </Grid> */}
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={4}
      >
        <AppButton
          text={t("start")}
          handleOnClick={() => {
            navigate("/login");
          }}
        />
      </Grid>
    </BaseLayout>
  );
};
export default SelectLanguage;
