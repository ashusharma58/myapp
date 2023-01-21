import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import microPhoneIcon from "../microPhone.png";
import { useNavigate } from "react-router-dom";
import FloatingButton from "./FloatingButton";
import Box from "@mui/material/Box";
import MicIcon from "../mic.png";

function SpeechRecognitionComponent({ classes }) {
  const navigate = useNavigate();
  // eslint-disable-next-line no-sparse-arrays
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        // window.open("http://" + website.split(" ").join(""));
        // push("/accounts");
        window.location.href = "http://localhost:3000/" + `${website}`;
        // <Link to="/accounts" />;
        navigate(`/${website}`);
      },
    },
    {
      command: "change background *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    ,
    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      //   continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          {/* 🎤 */}
          {/* <FloatingButton classes="microphone-icon" /> */}
          <div
            style={{
              // backgroundColor: "#6750A4",
              // height: 60,
              // width: 60,
              // borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              bottom: 2,
              right: 15,
            }}
          >
            <img
              style={{ height: 88 }}
              src={MicIcon}
              className="microphone-icon"
            />
          </div>
        </div>
        {/* <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div> */}
        {/* {isListening && (
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
        )} */}
      </div>
      {transcript && (
        <div
          className="microphone-result-container"
          style={{ display: "none" }}
        >
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
export default SpeechRecognitionComponent;
