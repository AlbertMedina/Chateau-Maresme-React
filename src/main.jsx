import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { I18nextProvider } from "react-i18next";
import i18n from "./services/i18n.config";

import { lightTheme, darkTheme } from "./services/theme";
import ThemeContext from "./services/theme.context";

import App from "./App.jsx";

function Main() {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <StrictMode>
      <ThemeContext.Provider value={{ mode, toggleTheme }}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </I18nextProvider>
      </ThemeContext.Provider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
