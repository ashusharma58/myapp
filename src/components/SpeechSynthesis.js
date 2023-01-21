import React, { useEffect, useState } from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";
// import { Box, Button, Textarea } from "@chakra-ui/react";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
const SpeechSynthesis = () => {
  //   useEffect(() => {
  //     setValue("You have transefer Ruppees 1lakh to Sarthak");
  //   }, []);
  //   useEffect(() => {
  //     speak({ text: value });
  //   }, [value]);
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <Box>
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
    </Box>
  );
};

export default SpeechSynthesis;
