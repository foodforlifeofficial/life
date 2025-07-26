import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import backgroundImage from "/donation.jpg";
import { SlPaypal } from "react-icons/sl";
import { RiBtcLine } from "react-icons/ri";
import { keyframes } from "@mui/system";

const heartPulse = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    text-shadow: 0 0 5px #ff4d6d, 0 0 10px #ff4d6d, 0 0 20px #ff0a3c;
    opacity: 1;
  }
  25% {
    transform: scale(1.15) rotate(5deg);
    text-shadow: 0 0 10px #ff6f8c, 0 0 20px #ff2a58, 0 0 30px #ff0045;
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(0deg);
    text-shadow: 0 0 15px #ff3b5b, 0 0 30px #ff0041, 0 0 40px #ff0025;
    opacity: 1;
  }
  75% {
    transform: scale(1.15) rotate(-5deg);
    text-shadow: 0 0 10px #ff6f8c, 0 0 20px #ff2a58, 0 0 30px #ff0045;
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0deg);
    text-shadow: 0 0 5px #ff4d6d, 0 0 10px #ff4d6d, 0 0 20px #ff0a3c;
    opacity: 1;
  }
`;

const brokenHeartShake = keyframes`
  0% {
    transform: rotate(0deg) translateX(0) scale(1);
    opacity: 1;
    filter: drop-shadow(0 0 3px #ff4d6d);
  }
  20% {
    transform: rotate(-15deg) translateX(-5px) scale(1.1);
    opacity: 1;
    filter: drop-shadow(0 0 8px #ff2a3c);
  }
  40% {
    transform: rotate(15deg) translateX(5px) scale(1.1);
    opacity: 1;
    filter: drop-shadow(0 0 8px #ff2a3c);
  }
  60% {
    transform: rotate(-10deg) translateX(-3px) scale(1);
    opacity: 0.7;
    filter: drop-shadow(0 0 5px #ff0033);
  }
  80% {
    transform: rotate(10deg) translateX(3px) scale(0.9);
    opacity: 0.5;
    filter: drop-shadow(0 0 3px #ff0022);
  }
  100% {
    transform: rotate(0deg) translateX(0) scale(0.8);
    opacity: 0;
    filter: none;
  }
`;

const cryingFaceAnimation = keyframes`
  0% { opacity: 1; transform: translateY(0) scale(1); }
  50% { opacity: 0.7; transform: translateY(5px) scale(1.1); }
  100% { opacity: 0; transform: translateY(10px) scale(1); }
`;

// Multiple hearts that pulse
const HeartsAnimation = ({ count = 7 }) => {
  const hearts = Array.from({ length: count }, (_, i) => {
    const top = Math.random() * 90 + 5;
    const left = Math.random() * 90 + 5;
    const size = Math.random() * 50 + 30;
    const duration = (Math.random() * 2 + 2).toFixed(2);
    const delay = (Math.random() * 2).toFixed(2);

    return (
      <Box
        key={i}
        component="span"
        sx={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${size}px`,
          color: "#ff1a44",
          animation: `${heartPulse} ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          userSelect: "none",
          filter: "drop-shadow(0 0 5px #ff0044)",
          pointerEvents: "none",
          transformOrigin: "center center",
          zIndex: 9999,
        }}
      >
        ❤️
      </Box>
    );
  });

  return <>{hearts}</>;
};

// Multiple broken hearts with crying faces
const BrokenHeartsAnimation = ({ count = 5 }) => {
  const brokenHearts = Array.from({ length: count }, (_, i) => {
    const top = Math.random() * 70 + 15;
    const left = Math.random() * 70 + 15;
    const size = Math.random() * 50 + 40;
    const duration = (Math.random() * 2 + 2).toFixed(2);
    const delay = (Math.random() * 2).toFixed(2);

    // Crying face position near the broken heart with small random offset
    const cryingTop = top + Math.random() * 10 - 5;
    const cryingLeft = left + Math.random() * 10 - 5;
    const cryingSize = size / 2.5;

    return (
      <React.Fragment key={i}>
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: `${top}%`,
            left: `${left}%`,
            fontSize: `${size}px`,
            color: "#ff1a44",
            animation: `${brokenHeartShake} ${duration}s ease forwards`,
            animationDelay: `${delay}s`,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 9999,
            transformOrigin: "center center",
          }}
        >
          💔
        </Box>
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: `${cryingTop}%`,
            left: `${cryingLeft}%`,
            fontSize: `${cryingSize}px`,
            color: "#3399ff",
            animation: `${cryingFaceAnimation} ${duration}s ease forwards`,
            animationDelay: `${delay}s`,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 9999,
            transformOrigin: "center center",
          }}
        >
          😢
        </Box>
      </React.Fragment>
    );
  });

  return <>{brokenHearts}</>;
};

const Donate = ({ darkMode }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);

  const [showHeart, setShowHeart] = useState(false);
  const [showBrokenHeart, setShowBrokenHeart] = useState(false);

  const visaLogo =
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg";
  const mastercardLogo =
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg";

  const handleCheckboxChange = (event) => {
    setIsConfirmed(event.target.checked);
    if (event.target.checked) {
      setShowBrokenHeart(false);
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 4000);
    } else {
      setShowHeart(false);
      setShowBrokenHeart(true);
      setTimeout(() => setShowBrokenHeart(false), 2000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          padding: "40px",
          backgroundColor: darkMode ? "#fff" : "#000",
          color: darkMode ? "#000" : "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          position: "relative",
          overflow: "visible",
        }}
      >
        {showHeart && <HeartsAnimation count={15} />}
        {showBrokenHeart && <BrokenHeartsAnimation count={10} />}
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: darkMode ? "#000" : "#fff" }}
        >
          Support Our Mission
        </Typography>

        <Typography
          variant="h6"
          paragraph
          sx={{ color: darkMode ? "#000" : "#fff" }}
        >
          Every donation helps provide meals for those in need. Choose your
          preferred payment method below.
        </Typography>

        <Box mt={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isConfirmed}
                onChange={handleCheckboxChange}
                sx={{
                  color: showError ? "red" : darkMode ? "#000" : "#fff",
                }}
              />
            }
            label={
              <Typography
                sx={{
                  color: showError ? "red" : darkMode ? "#000" : "#fff",
                  fontSize: 13,
                }}
              >
                Confirm that you donate voluntarily and that you are not forced
                by other factors, as well as confirm that you have read the
                terms of use and agree to all points.
              </Typography>
            }
          />
        </Box>

        {showError && (
          <Typography mt={2} sx={{ color: "red" }}>
            You must confirm to proceed with the donation.
          </Typography>
        )}

        <Box
          mt={4}
          sx={{
            opacity: isConfirmed ? 1 : 0.3,
            pointerEvents: isConfirmed ? "auto" : "none",
            transition: "opacity 0.3s ease",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            href="https://www.donationalerts.com/r/foodforlife"
            target="_blank"
            sx={{
              color: darkMode ? "black" : "white",
              borderColor: darkMode ? "#000" : "#fff",
              padding: "12px 32px",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0e9e3c",
                color: "white",
              },
            }}
          >
            Donate with Card
            <Box component="span" sx={{ ml: 1, display: "flex", gap: 1 }}>
              <img src={visaLogo} alt="Visa" style={{ height: "18px" }} />
              <img
                src={mastercardLogo}
                alt="Mastercard"
                style={{ height: "24px" }}
              />
            </Box>
          </Button>

          <Button
            variant="outlined"
            size="large"
            href="https://paypal.me/sharethemealorg"
            target="_blank"
            sx={{
              color: darkMode ? "black" : "white",
              borderColor: darkMode ? "#000" : "#fff",
              padding: "12px 32px",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0e9e3c",
                color: "white",
              },
            }}
          >
            Donate with PayPal Link
            <Box component="span" sx={{ ml: 1 }}>
              <SlPaypal size={30} />
            </Box>
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://commerce.coinbase.com/checkout/a33276c8-5af1-48f6-958b-9f98e229edeb"
            sx={{
              color: darkMode ? "black" : "white",
              padding: "16px 40px",
              borderColor: darkMode ? "#000" : "#fff",
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0e9e3c",
                color: "white",
              },
            }}
          >
            Donate with Crypto
            <Box component="span" sx={{ ml: 1 }}>
              <RiBtcLine size={30} />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Donate;
