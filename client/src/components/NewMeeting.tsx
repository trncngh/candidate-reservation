import { Close, Done } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Candidate, initialCandidate } from "../interfaces";

interface NewMeetingProps {
  isOpen: boolean;
  handleDialog: () => void;
  handleCreateMeeting: (candidate: Candidate) => void;
}

const NewMeeting = ({
  isOpen,
  handleDialog,
  handleCreateMeeting,
}: NewMeetingProps) => {
  const [candidate, setCandidate] = useState<Candidate>(initialCandidate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateMeeting(candidate);
    handleDialog();
  };

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={isOpen} fullWidth={true} maxWidth="xs">
      <Stack>
        <DialogTitle sx={{ m: 0, p: 2, padding: (theme) => theme.spacing(2) }}>
          Create new invitation
          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
            onClick={() => {
              handleDialog();
              setCandidate(initialCandidate);
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
      </Stack>
      <Stack
        component="form"
        id="new-meeting"
        onSubmit={handleSubmit}
        spacing={2}
      >
        <TextField
          id="candidate-name"
          name="name"
          type="text"
          label="Name"
          autoComplete="current-email"
          value={candidate.name}
          onChange={handleFields}
        />
        <TextField
          id="candidate-email"
          type="email"
          name="email"
          label="Email"
          value={candidate.email}
          onChange={handleFields}
        />
        <BottomNavigation showLabels>
          <BottomNavigationAction type="submit" label="Done" icon={<Done />} />
          <BottomNavigationAction
            label="Cancel"
            icon={<Close />}
            onClick={() => {
              handleDialog();
              setCandidate(initialCandidate);
            }}
          />
        </BottomNavigation>
      </Stack>
    </Dialog>
  );
};

export default NewMeeting;
