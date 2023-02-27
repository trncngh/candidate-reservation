import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import dayjs from "dayjs";
import React from "react";
import { Meeting } from "../interfaces";
import { convertToLocalTime, getReadableLocalTime } from "../utils";

interface ThankYouProps {
  meetingInfo: Meeting;
}

const ThankYou = ({ meetingInfo }: ThankYouProps) => {
  return (
    <Container>
      <Typography>
        Hi <b>{meetingInfo.candidate.name}</b>
        , thank your for getting in touch with us! <br /> Your meeting is
        scheduled at <b>{getReadableLocalTime(dayjs(meetingInfo.dateTime))}</b>
        . <br /> See you there.
      </Typography>
    </Container>
  );
};

export default ThankYou;
