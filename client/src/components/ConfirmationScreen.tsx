import { Close, Done } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { FormEvent } from "react";
import { getCurrentTimeZone, getReadableLocalTime } from "../utils";

interface ConfirmationScreenProps {
  isOpen: boolean;
  confirmationTime: string;
  handleDialog: () => void;
  handleConfirm: () => void;
}

const ConfirmationScreen = ({
  isOpen,
  confirmationTime,
  handleDialog,
  handleConfirm,
}: ConfirmationScreenProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleConfirm();
  };

  return (
    <Dialog open={isOpen} fullWidth={true} maxWidth="xs">
      <Stack>
        <DialogTitle sx={{ m: 0, p: 2, padding: (theme) => theme.spacing(2) }}>
          Confirm meeting
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
        onSubmit={handleSubmit}
        spacing={2}
        sx={{ padding: 2 }}
      >
        <Typography>
          {`Your meeting will be scheduled at ${getReadableLocalTime(
            dayjs(confirmationTime)
          )}`}{" "}
          ({getCurrentTimeZone()})
        </Typography>
        <Typography></Typography>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            type="submit"
            label="Confirm"
            icon={<Done />}
          />
          <BottomNavigationAction
            label="Cancel"
            icon={<Close />}
            onClick={() => {
              handleDialog();
            }}
          />
        </BottomNavigation>
      </Stack>
    </Dialog>
  );
};

export default ConfirmationScreen;
