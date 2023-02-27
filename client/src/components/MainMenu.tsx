import { AppBar, Typography } from "@mui/material";
import React from "react";

interface MainMenuProps {}

const MainMenu = ({}: MainMenuProps) => {
  return (
    <AppBar sx={{ marginBottom: 20 }}>
      <Typography>Meeting Reservation</Typography>
    </AppBar>
  );
};

export default MainMenu;
