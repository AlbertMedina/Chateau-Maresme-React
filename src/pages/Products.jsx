import { Box, Grid, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import wines from "../data/wines";
import packs from "../data/packs";

import ProductCard from "../components/shared/ProductCard";

export default function Products() {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 10, px: { xs: 2, md: 5 }, mb: 10 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
      >
        {t("products.title")}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {wines.map((wine) => (
          <ProductCard
            key={wine.id}
            name={wine.name}
            type={t(wine.type)}
            description={t(wine.description)}
            image={wine.image}
            price={wine.price}
          />
        ))}
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
