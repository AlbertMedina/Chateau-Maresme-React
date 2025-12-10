import { Grid, Box } from "@mui/material";

export default function ImageButton({ image, text, onClick }) {
  return (
    <Grid item size={{ xs: 11, sm: 11, md: 11, lg: 5.5 }}>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          borderRadius: 3,
          overflow: "hidden",
          cursor: "pointer",
          "&:hover img": {
            filter: "brightness(50%)",
            transform: "scale(1.05)",
            transition: "0.3s",
          },
          "&:hover .overlay": {
            opacity: 1,
          },
        }}
        onClick={onClick}
      >
        <img
          src={image}
          alt={text}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.3s",
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 40,
            fontWeight: "bold",
            opacity: 0,
            transition: "0.3s",
          }}
        >
          {text}
        </Box>
      </Box>
    </Grid>
  );
}
