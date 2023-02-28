import { Container } from "@mui/material";
import { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import InvalidInvitation from "../../components/InvalidInvitation";
import MainMenu from "../../components/MainMenu";
import ThankYou from "../../components/ThankYou";
import { Meeting } from "../../interfaces";
import MaterialDatePicker from "./MaterialDatePicker";
import {
  confirmMeeting,
  getAllMeetingsByDate,
  getCurrentMeetingInfo,
  selectCurrentMeetingSlots,
  selectMeetingReservationInfo,
} from "./meetingReservationSlice";

const MeetingReservation = () => {
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

    if (typeof id === "string") {
      dispatch(getCurrentMeetingInfo(id));
    } else {
      setSearchParams("");
    }
  }, [dispatch, searchParams, setSearchParams]);

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
