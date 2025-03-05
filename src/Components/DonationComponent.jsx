import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  useMediaQuery,
  LinearProgress,
} from "@mui/material";
import { Link } from "react-router-dom";

// Funcție pentru calculul meselor și procentajului
const startDate = new Date("2025-01-01");
const today = new Date();

const calculateMealsData = (initialValue, dailyIncrease, totalMeals) => {
  const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const value = initialValue + daysElapsed * dailyIncrease;
  const percentage = Math.min((value / totalMeals) * 100, 100); // Max 100%
  return { value, percentage };
};

const DonationComponent = ({
  image,
  title,
  description,
  flagUrl,
  position = "left",
  urgent = false,
  initialValue,
  dailyIncrease,
  totalMeals,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:550px)");

  const { value: currentMeals, percentage } = calculateMealsData(
    initialValue,
    dailyIncrease,
    totalMeals
  );

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isSmallScreen
          ? "column"
          : position === "right"
          ? "row-reverse"
          : "row",
        boxShadow: 3,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: isSmallScreen ? "100%" : "50%" }}
        image={image}
        alt={title}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {urgent && (
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "14px",
              alignSelf: "flex-end",
              marginBottom: "5px",
            }}
          >
            URGENT
          </div>
        )}

        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textIndent: "50px",
            textAlign: "justify",
          }}
        >
          {description}
        </Typography>

        {/* <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Meals provided:</strong> {currentMeals.toLocaleString()} /{" "}
            {totalMeals.toLocaleString()}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{ height: 8, borderRadius: 5, mt: 1 }}
          />
          <Typography variant="caption">
            {percentage.toFixed(2)}% completed
          </Typography>
        </Box> */}

        <Box sx={{ mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={Math.min(percentage, 100)}
            sx={{ width: "100%" }}
            color="success"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: 1,
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="primary">
              {currentMeals.toLocaleString()} meals
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="bold">
              {percentage.toFixed(2)}%
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f4c430",
              color: "#000",
              padding: "12px 32px",
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#dba100",
              },
            }}
            component={Link}
            to="/donate"
          >
            Donate now
            <img
              src={flagUrl}
              alt="Flag"
              style={{
                width: "24px",
                height: "16px",
                marginLeft: "8px",
              }}
            />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

DonationComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flagUrl: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["left", "right"]),
  urgent: PropTypes.bool,
  initialValue: PropTypes.number.isRequired,
  dailyIncrease: PropTypes.number.isRequired,
  totalMeals: PropTypes.number.isRequired,
};

export default DonationComponent;
