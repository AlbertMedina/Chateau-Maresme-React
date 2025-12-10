import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ProductCard({
  id,
  name,
  type,
  description,
  image,
  price,
}) {
  return (
    <Grid item size={{ xs: 11, sm: 9, md: 5, lg: 3.5 }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px) scale(1.04)",
            boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            height: 400,
            objectFit: "contain",
            backgroundColor: "#FEFAF6",
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{name + " - " + type}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {price}€
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
