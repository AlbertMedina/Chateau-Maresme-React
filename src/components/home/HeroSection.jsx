import { Box, Typography } from "@mui/material";

export default function HeroSection({ title, subtitle }) {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: 400,
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontFamily: "'Great Vibes', cursive", fontSize: "10rem" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        color="text.secondary"
        sx={{ fontFamily: "'Great Vibes', cursive" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
