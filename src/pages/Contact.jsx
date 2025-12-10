import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import WeatherCard from "../components/contact/WeatherCard";
import contactData from "../data/contact-data";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:${
      contactData.email
    }?subject=Formulari de contacte&body=Nom: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0ATelèfon: ${encodeURIComponent(
      formData.phone
    )}%0AMissatge: ${encodeURIComponent(formData.message)}`;

    window.location.href = mailto;

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Box sx={{ mt: 10, px: { xs: 2, md: 5 }, mb: 10 }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
      >
        {t("contact.title")}
      </Typography>

      <Grid container spacing={10} justifyContent="center">
        <Grid item size={{ xs: 12, sm: 12, md: 3 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {t("contact.write")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <TextField
              label={t("contact.name")}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label={t("contact.email")}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label={t("contact.phone")}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label={t("contact.message")}
              name="message"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {t("contact.submit")}
            </Button>
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            {t("contact.visit")}
          </Typography>
          <Box height="100%" position="relative">
            <iframe
              title="Château Maresme"
              src={contactData.maps}
              style={{
                border: 0,
                borderRadius: 20,
                width: "100%",
                height: "100%",
              }}
              allowFullScreen=""
              loading="lazy"
            />
            <Box
              position="absolute"
              top={16}
              right={16}
              zIndex={10}
              width={150}
            >
              <WeatherCard
                latitude={contactData.latitude}
                longitude={contactData.longitude}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
