import { Typography, AppBar, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" component="footer" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="body2" color="inherit">
          Copyright © {new Date().getFullYear()} - {t("footer.rights")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
