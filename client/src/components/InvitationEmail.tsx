import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Meeting } from "../interfaces";

interface InvitationEmailProps {
  isOpen: boolean;
  meetingInfo: Meeting;
  handleDialog: () => void;
}

const InvitationEmail = ({
  isOpen,
  meetingInfo,
  handleDialog,
}: InvitationEmailProps) => {
  return (
    <Dialog open={isOpen} fullWidth={true} maxWidth="xs">
      <Stack>
        <DialogTitle sx={{ m: 0, p: 2, padding: (theme) => theme.spacing(2) }}>
          Meeting infomation
          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
            onClick={() => {
              handleDialog();
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
      </Stack>
      <Stack
        component="form"
        id="confirm-meeting"
        spacing={2}
        sx={{ padding: 2 }}
      >
        <Typography>
          An invitation email has been sent to candidate{" "}
          {meetingInfo.candidate.name}. <br />
          Meeting reservation link: http://localhost:3000/?id={meetingInfo.id}
        </Typography>
      </Stack>
    </Dialog>
  );
};

export default InvitationEmail;
