import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ mt: 10, mb: 10, px: { xs: 2, md: 5 }, maxWidth: 1200, mx: "auto" }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
      >
        {t("about.title")}
      </Typography>

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, mb: 3, textAlign: "justify" }}
      >
        {t("about.paragraph-1")}
      </Typography>

      <Box
        component="img"
        src="src/assets/images/about/vineyard.png"
        alt={t("about.title")}
        sx={{
          width: "100%",
          maxWidth: 1200,
          borderRadius: 2,
          boxShadow: 3,
          mb: 3,
        }}
      />

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, mb: 3, textAlign: "justify" }}
      >
        {t("about.paragraph-2")}
      </Typography>

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, mb: 3, textAlign: "justify" }}
      >
        {t("about.paragraph-3")}
      </Typography>

      <Box
        component="img"
        src="src/assets/images/about/cellar.png"
        alt={t("about.title")}
        sx={{
          width: "100%",
          maxWidth: 1200,
          borderRadius: 2,
          boxShadow: 3,
          mb: 3,
        }}
      />

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, mb: 3, textAlign: "justify" }}
      >
        {t("about.paragraph-4")}
      </Typography>

      <Box
        component="img"
        src="src/assets/images/about/grapes.png"
        alt={t("about.title")}
        sx={{
          width: "100%",
          maxWidth: 1200,
          borderRadius: 2,
          boxShadow: 3,
          mb: 3,
        }}
      />
    </Box>
  );
}
