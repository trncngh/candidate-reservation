import { createTheme } from "@mui/material";
export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1536,
    },
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif`,
  },
  palette: {},
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 30,
          backgroundColor: "#025FEB",
          "& .MuiTypography-root": {
            fontSize: 16,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          alignItems: "center",
          "&:nth-of-type(even)": {
            background: "#F6F7F7",
          },
          "&.table-head": {
            height: 40,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "#E4EDF2",
          height: 40,
          "& th": {
            fontSize: 12,
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#4B5C68",
          fontSize: 14,
          padding: 0,
          textAlign: "center",
          "&.bolded-text": {
            fontWeight: "bold",
            fontSize: 16,
          },
          "&.align-left": {
            textAlign: "end",
          },
          "&.align-center": {
            textAlign: "center",
          },
          "&.point": {
            fontWeight: "bold",
            color: "#025FEB",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.title": {
            fontSize: 24,
            textAlign: "center",
            fontWeight: "bold",
            color: "#182C62",
            marginBottom: 20,
          },
          "&.footer": {
            color: "#4B5C68",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          "& span": {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          width: "90%",
          borderColor: "#E4EDF2",
          alignContent: "center",
          alignItems: "center",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&.main-container": {
            marginTop: 120,
            alignItems: "center",
            flexWrap: "wrap",
            display: "flex",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          "&>a": {
            height: 60,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.time-select": {
            outerHeight: 50,
          },
        },
      },
    },
  },
});
