import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  LinearProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const Section = styled(Box)({
  padding: "10px 0",
  textAlign: "center",
});
const YellowButton = styled(Button)({
  backgroundColor: "#f4c430",
  color: "#000",
  padding: "12px 32px",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#dba100",
  },
});

const InfoSection = ({
  darkMode,
  image,
  text,
  buttonText,
  buttonLink,
  progressData,
  imagePosition = "left",
}) => {
  return (
    <Section sx={{ backgroundColor: darkMode, width: "100%" }}>
      <Grid container alignItems="center" spacing={2}>
        {imagePosition === "left" && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{ padding: "0 20px", boxSizing: "border-box" }}
          >
            <Box
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </Grid>
        )}

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <CardContent>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{
                  textAlign: "justify",
                  textIndent: "2em",
                  fontSize: "12pt",
                }}
              >
                {text}
              </Typography>

              <Box textAlign="center" mt={3}>
                <YellowButton
                  variant="contained"
                  component={Link}
                  to={buttonLink}
                >
                  {buttonText}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                    alt="Palestine Flag"
                    style={{ width: "24px", height: "16px", marginLeft: "8px" }}
                  />
                </YellowButton>
              </Box>

              {progressData && (
                <Box
                  sx={{
                    maxWidth: "70%",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(progressData.percentage, 100)}
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
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="primary"
                    >
                      {progressData.value} meals
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      fontWeight="bold"
                    >
                      {progressData.percentage.toFixed(2)}%
                    </Typography>
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {imagePosition === "right" && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{ padding: "0 20px", boxSizing: "border-box" }}
          >
            <Box
              sx={{
                backgroundImage:
                  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px", // Adaugă o înălțime fixă
                width: "100%", // Ocupă tot spațiul disponibil
                borderRadius: "8px",
              }}
            />
          </Grid>
        )}
      </Grid>
    </Section>
  );
};

export default InfoSection;
