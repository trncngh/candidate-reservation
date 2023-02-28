import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useEffect, useState } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface CustomizedAlertProps {
  message: string;
}

const CustomizedAlert = ({ message }: CustomizedAlertProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [severity, setServerity] = useState<AlertColor | undefined>("error");
  //   const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setServerity("error");
    // setMessage("User not found");
    setOpen(true);
  }, [message]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open && message.length > 0}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomizedAlert;
