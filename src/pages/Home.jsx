import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import ImageButton from "../components/shared/ImageButton";
import ProductCard from "../components/shared/ProductCard";
import packs from "../data/packs";

import vineyard from "../assets/images/home/vineyard.png";
import cellar from "../assets/images/home/cellar.png";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 10, px: { xs: 2, md: 5 }, mb: 10 }}>
      <HeroSection title={t("home.title")} subtitle={t("home.subtitle")} />

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
        <ImageButton
          image={vineyard}
          text={t("home.about")}
          onClick={() => navigate("/about")}
        />
        <ImageButton
          image={cellar}
          text={t("home.products")}
          onClick={() => navigate("/products")}
        />
      </Grid>

      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", mb: 6 }}
      >
        {t("home.featured")}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {packs.map((pack) => (
          <ProductCard
            key={pack.id}
            name={pack.name}
            type={t(pack.type)}
            description={t(pack.description)}
            image={pack.image}
            price={pack.price}
          />
        ))}
      </Grid>
    </Box>
  );
}
