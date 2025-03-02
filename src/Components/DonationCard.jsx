import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  LinearProgress,
  Button,
} from "@mui/material";
import { People, AccessTime } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function DonationCard({
  title,
  image,
  totalMeals,
  currentMeals,
  supporters,
}) {
  const percentage = (currentMeals / totalMeals) * 100;

  return (
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3 }}>
      {/* Titlu și link */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        {/* <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", mt: 1 }}
        >
          | Read more
        </Typography> */}
      </CardContent>

      {/* Imagine */}
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt={title}
        sx={{ borderBottomLeftRadius: 100, borderBottomRightRadius: 0 }}
      />

      {/* Informații despre donații */}
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <AccessTime fontSize="small" color="disabled" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {totalMeals.toLocaleString()} meals
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <People fontSize="small" color="disabled" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {supporters.toLocaleString()} supporters
            </Typography>
          </Box>
        </Box>

        {/* Bara de progres */}
        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{ width: "100%", my: 2 }}
        />

        {/* Numărul de mese și procentajul */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold" color="primary">
            {currentMeals.toLocaleString()} meals
          </Typography>
          <Typography variant="body1" fontWeight="bold" color="primary">
            {Math.round(percentage)}%
          </Typography>
        </Box>

        {/* Buton donație */}
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#FDC830",
            color: "#000",
            fontWeight: "bold",
            width: "100%",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#FDC830" },
          }}
          component={Link}
          to="/donate"
        >
          Donate now
        </Button>
      </CardContent>
    </Card>
  );
}
