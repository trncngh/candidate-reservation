import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import MainMenu from "../../components/MainMenu";
import NewMeeting from "../../components/NewMeeting";
import { Candidate } from "../../interfaces";
import {
  createNewMeeting,
  loadMeetingList,
  selectMeetingList,
  sendInvitation,
} from "./adminSlice";
import MeetingList from "./MeetingList";

const Admin = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const meetingList = useAppSelector(selectMeetingList);
  useEffect(() => {
    dispatch(loadMeetingList());
  }, [dispatch]);

  const handleCreateMeeting = (candidate: Candidate) => {
    dispatch(createNewMeeting(candidate));
  };

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };
  const handleSendIvitation = (id: string) => {
    dispatch(sendInvitation(id));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <MainMenu />
      <Button variant="contained" color="success" onClick={handleDialog}>
        Create new Meeting
      </Button>
      <MeetingList
        meetingList={meetingList}
        handleSendInvitation={handleSendIvitation}
      />
      <NewMeeting
        isOpen={openDialog}
        handleDialog={handleDialog}
        handleCreateMeeting={handleCreateMeeting}
      />
    </Container>
  );
};

export default Admin;
