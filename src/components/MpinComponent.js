import React, { FC, useState } from "react";

import { Text } from "@chakra-ui/layout";
import { HStack, PinInput, PinInputField, Stack } from "@chakra-ui/react";
//import { useHistory } from "react-router-dom";

export const PinInputStyle = {
  borderColor: "white",
  type: "number",
  bg: "#F3FBFB",
  borderRadius: "none",
  borderBottom: "4px",
  borderBottomColor: "#81C1BD",
  textStyle: "heading-4",
  fontSize: "1.25rem",
  _invalid: {
    borderColor: "white",
    type: "number",
    bg: "#F3FBFB",
    borderBottom: "4px",
    borderBottomColor: "error-red",
    textStyle: "heading-4",
    textAlign: "center",
  },
  _focus: {
    borderColor: "white",
    type: "number",
    bg: "#F3FBFB",
    borderBottom: "4px",
    borderBottomColor: "#12877F",
    textStyle: "heading-4",
    textAlign: "center",
  },
};

type MpinPageProps = {
  handlePinValidation: (pin: string) => Promise<{ data: string }>,
  InitiateOperation: () => void,
};

export const MPinComponent: FC<MpinPageProps> = ({
  handlePinValidation,
  InitiateOperation,
}: MpinPageProps) => {
  //const [pin, setPin] = useState("");
  const [pinValue, setPinValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [maxAttempt, setMaxAttempt] = useState(5);
  //const { push } = useHistory();
  const handleChange = (value: string): void => {
    setIsInvalid(false);
    setPinValue(value);
    if (value.length === 6) {
      //setPin(value);
    }
  };

  const handleComplete = (value: string): void => {
    //setPin(value);
    // push("/");
    handlePinValidation(value)
      .then(() => InitiateOperation())
      .catch(() => {
        setIsInvalid(true);
        maxAttempt > 0 && setMaxAttempt(maxAttempt - 1);
      });

    //then Call API
  };

  return (
    <>
      <Stack spacing={2}>
        <Text textStyle="subheading-4" color="gray-60">
          MPIN VERIFICATION
        </Text>
        <Text textStyle="heading-4" color="black">
          Enter MPIN to authenticate
        </Text>
        <HStack spacing={2}>
          <PinInput
            mask
            otp
            // isDisabled={isOtpLoading}
            onComplete={(value) => handleComplete(value)}
            placeholder=" "
            isInvalid={isInvalid}
            onChange={(value) => handleChange(value)}
            value={pinValue}
            isDisabled={maxAttempt === 0}
          >
            <PinInputField {...PinInputStyle} />
            <PinInputField {...PinInputStyle} />
            <PinInputField {...PinInputStyle} />
            <PinInputField {...PinInputStyle} />
            <PinInputField {...PinInputStyle} />
            <PinInputField {...PinInputStyle} />
          </PinInput>
        </HStack>
        {isInvalid && (
          <Text textStyle="helper" color="error-red">
            {`Invalid PIN: ${maxAttempt} attempt(s) remaining`}
          </Text>
        )}
      </Stack>
    </>
  );
};
