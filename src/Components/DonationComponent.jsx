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
} from "@mui/material";
// import { RxLetterSpacing } from "react-icons/rx";
import { Link } from "react-router-dom";

const DonationComponent = ({
  image,
  title,
  description,
  donateLink,
  position = "left",
  urgent = false,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:550px)");

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
            RxLetterSpacing: "3px",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* <Button variant="outlined" color="primary">
            Read more
          </Button> */}
          <Button
            variant="contained"
            // color="warning"
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
            {/* href={donateLink}> */}
            Donate now
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
  donateLink: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["left", "right"]),
  urgent: PropTypes.bool,
};

export default DonationComponent;
