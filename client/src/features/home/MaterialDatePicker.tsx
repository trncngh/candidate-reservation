import { Dayjs } from "dayjs";
import { useState } from "react";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import ConfirmationScreen from "../../components/ConfirmationScreen";
import CustomizedAlert from "../../components/CustomizedAlert";
import { Meeting } from "../../interfaces";

interface MaterialDatePickerProps {
  meetingInfo: Meeting;
  busySlots: string[];
  handleConfirmMeeting: (dateTimeLocal: Dayjs | null) => void;
  handleGetMeetingByDate: (date: Dayjs | null) => void;
}

const MaterialDatePicker = ({
  meetingInfo,
  busySlots,
  handleGetMeetingByDate,
  handleConfirmMeeting,
}: MaterialDatePickerProps) => {
  // const currentHour = dayjs().hour();
  // const currentDate = dayjs().date();
  // // console.log(currentHour, currentDate);
  const availableHour = ["13", "14", "15", "16"];
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState("");
  const [message, setMessage] = useState<string>("");
  const handleChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };
  const handleAcceptDate = (newDate: Dayjs | null) => {
    //dispatch get available time slot here
    handleGetMeetingByDate(newDate);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    if (date !== null) {
      setDate(date.set("hour", parseInt(event.target.value)));
      setTime(event.target.value);
      console.log(date);
    }
  };

  const disableWeekends = (date: Dayjs) => {
    return [0, 6].includes(date.day());
  };

  const handleDialog = () => {
    console.log(date);
    if (date === null) {
      setMessage("Please select date");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else if (time.length === 0) {
      setMessage("Please select time");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setOpenDialog(!openDialog);
    }
  };

  const handleConfirm = () => {
    handleConfirmMeeting(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{ margin: 2 }}>
        <Typography>
          {" "}
          Hi {meetingInfo.candidate.name}, Please schedule your meeting time{" "}
        </Typography>
      </Stack>
      <Stack spacing={3} direction="row">
        <MobileDatePicker
          label="Select meeting date"
          inputFormat="YYYY-MM-DD"
          value={date}
          onChange={handleChange}
          onAccept={handleAcceptDate}
          renderInput={(params) => <TextField {...params} />}
          shouldDisableDate={disableWeekends}
          disablePast
        />
        <FormControl sx={{ width: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={time}
            onChange={handleTimeChange}
            label="Time"
            aria-label="Time"
            disabled={date === null}
            className="time-select"
          >
            {availableHour.map((item: string, index: number) => {
              return (
                <MenuItem
                  key={index}
                  value={item}
                  disabled={busySlots.includes(item)}
                >
                  {item}:00
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button variant="contained" color="success" onClick={handleDialog}>
          Confirm
        </Button>
      </Stack>
      <ConfirmationScreen
        confirmationTime={date?.format("YYYY-MM-DD") + "T" + time + ":00"}
        isOpen={openDialog}
        handleDialog={handleDialog}
        handleConfirm={handleConfirm}
      />
      <CustomizedAlert message={message} />
    </LocalizationProvider>
  );
};

export default MaterialDatePicker;
