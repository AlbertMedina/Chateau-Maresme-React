import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useContext } from "react";
import ThemeContext from "../../services/theme.context";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            sx={{ typography: "body2" }}
          >
            {t("nav.home")}
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/about"
            sx={{ typography: "body2" }}
          >
            {t("nav.about")}
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/products"
            sx={{ typography: "body2" }}
          >
            {t("nav.products")}
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/contact"
            sx={{ typography: "body2" }}
          >
            {t("nav.contact")}
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            variant="standard"
            disableUnderline
            sx={{
              color: "inherit",
              typography: "body1",
              "& .MuiSvgIcon-root": { color: "inherit" },
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ca">Català</MenuItem>
            <MenuItem value="es">Español</MenuItem>
          </Select>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{
              width: 36,
              height: 36,
              padding: 0,
            }}
          >
            {mode === "light" ? (
              <DarkMode fontSize="small" />
            ) : (
              <LightMode fontSize="small" />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
