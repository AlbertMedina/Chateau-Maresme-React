import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#8e1c1c" },
        secondary: { main: "#e57373" },
        background: {
            default: "#fff5f5",
        },
    },
    typography: {
        fontFamily: "Lora",
        body1: { fontSize: "1.4rem" },
        body2: { fontSize: "1.2rem" },
        bodylarge: { fontSize: "1.6rem" },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#ff8a80" },
        secondary: { main: "#ff5252" },
    },
    typography: {
        fontFamily: "Lora",
        body1: { fontSize: "1.4rem" },
        body2: { fontSize: "1.2rem" },
        body3: { fontSize: "1.6rem" },
    },
});