import { Container } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CustomizedAlert from "../../components/CustomizedAlert";
import InvalidInvitation from "../../components/InvalidInvitation";
import { Meeting } from "../../interfaces";
import { convertToUTCTime } from "../../utils";
import {
  confirmMeeting,
  getAllMeetingsByDate,
  selectCurrentMeetingSlots,
} from "./meetingReservationSlice";
import MaterialDatePicker from "./MaterialDatePicker";
import {
  getCurrentMeetingInfo,
  selectMeetingReservationInfo,
} from "./meetingReservationSlice";
import ThankYou from "../../components/ThankYou";
import MainMenu from "../../components/MainMenu";

interface MeetingReservationProps {}

const MeetingReservation = ({}: MeetingReservationProps) => {
  const meetingInfo = useAppSelector(selectMeetingReservationInfo);
  const [searchParams, setSearchParams] = useSearchParams();

  const busySlots = useAppSelector(selectCurrentMeetingSlots).map(
    (item: Meeting) => {
      const time = new Date(item.dateTime).getHours();
      console.log(time);
      console.log(item.dateTime);
      return time.toString();
    }
  );

  const handleGetMeetingsByDate = (date: Dayjs | null) => {
    console.log(date);
    if (!!date) {
      dispatch(getAllMeetingsByDate(date));
    }
  };

  const handleConfirmMeeting = (dateTimeLocal: Dayjs | null): void => {
    if (dateTimeLocal !== null) {
      dispatch(
        confirmMeeting({
          id: meetingInfo.id,
          dateTime: dateTimeLocal,
        })
      );
    }
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    const id = searchParams.get("id");
    const currentDate = dayjs();

    if (typeof id === "string") {
      dispatch(getCurrentMeetingInfo(id));
      // dispatch(getMeetingsByDay(currentDate.toJSON()));
      // handleGetMeetingsByDate(currentDate.format("YYYY-MM-DD"));
    }
  }, [searchParams]);

  return (
    <Container sx={{ pt: 4 }}>
      <MainMenu />
      {meetingInfo.id.length === 0 || meetingInfo.isSent === false ? (
        <InvalidInvitation />
      ) : meetingInfo.isConfirmed ? (
        <ThankYou meetingInfo={meetingInfo} />
      ) : (
        <MaterialDatePicker
          meetingInfo={meetingInfo}
          busySlots={busySlots}
          handleGetMeetingByDate={handleGetMeetingsByDate}
          handleConfirmMeeting={handleConfirmMeeting}
        />
      )}
    </Container>
  );
};

export default MeetingReservation;
