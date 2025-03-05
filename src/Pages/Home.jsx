import React, { useState } from "react";
import {
  Box,
  Grid2,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  useMediaQuery,
  Container,
  Stack,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import homeBack from "/home.jpg";
import homeBack2 from "/home2.jpg";
import ua1 from "/ua1.jpg";
import ua2 from "/ua2.jpg";
import somaliaImage from "/somalia.jpg";
import syriaImage from "/syria.jpeg";
import afghanistanImage from "/afgha.jpg";
import yemenImage from "/yemen.jpg";
import ethiopiaImage from "/ethiopia.jpg";
import sudanImage from "/sudan.jpg";

import { Link } from "react-router-dom";
import { calculateMealsData } from "../Components/Common";
import DonationComponent from "../Components/DonationComponent";

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
const BackgroundBox = styled(Box)({
  width: "100%",
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
});

export default function Home({ darkMode }) {
  const result = calculateMealsData();
  const startDate = new Date("2025-01-01");
  const today = new Date();

  const getInitialValuePalestine = () => {
    const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    let value = 53435 + daysElapsed * 500;
    let percentage = (value / 350000) * 100;

    return { value, percentage };
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [palestineData] = useState(getInitialValuePalestine());

  const getInitialValueUcraine = () => {
    const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    let value = 43320 + daysElapsed * 500;
    let percentage = (value / 250000) * 100;

    return { value, percentage };
  };

  const [ucraineData] = useState(getInitialValueUcraine());
  return (
    <Box
      sx={{
        backgroundColor: darkMode,
        width: "100%",
      }}
    >
      {/* Hero Section */}
      <Section
        sx={{
          padding: "80px 0",
          backgroundColor: darkMode,
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: "100%" }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Fight hunger with us
          </Typography>
          <Typography variant="h6" color={darkMode}>
            With just a few taps on your phone you can donate to someone in need
            and the World Food Programme will deliver the meals. Help us end
            hunger by donating now.
          </Typography>
        </Box>
      </Section>
      <Section
        sx={{
          backgroundColor: darkMode,
          width: "100%",
        }}
      >
        <Container sx={{ py: 0 }}>
          <Stack spacing={4}>
            {/* palestine */}
            <DonationComponent
              image={homeBack}
              title="Give emergency aid in Palestine"
              description="The conflict in Gaza has caused severe food shortages and a humanitarian crisis. Officials accuse Israel of using starvation as a weapon,
             and children are among the most affected, facing malnutrition and medical emergencies."
              donateLink="https://donation-link.com"
              position="left"
              urgent
            />

            {/* ukraine */}
            <DonationComponent
              image={ua1}
              title="Ukraine: Support families"
              description="In Ukraine, war has displaced millions of children, forcing many into underground shelters or refugee life. They endure hunger, lack of 
              medical care, and deep psychological trauma, growing up in fear and uncertainty, often without schooling."
              donateLink="https://another-donation.com"
              position="right"
              urgent
            />

            {/* sudan */}
            <DonationComponent
              image={sudanImage}
              title="Sudan: Aid for Families"
              description="In Sudan, ongoing conflict has left millions displaced, struggling with extreme food shortages, lack of medical care, and violence. Children face severe malnutrition, disease outbreaks, and disrupted education, growing up in constant fear and instability."
              donateLink="https://sudan-donation.com"
              position="left"
            />

            {/* ethiopia */}
            <DonationComponent
              image={ethiopiaImage}
              title="Ethiopia: Help Vulnerable Communities"
              description="In Ethiopia, ongoing conflict and drought have displaced thousands, leaving families without food, water, and medical care. Children suffer from severe malnutrition, lack of education, and the constant threat of violence, struggling to survive in extreme hardship."
              donateLink="https://ethiopia-donation.com"
              position="right"
            />

            {/* yemen */}
            <DonationComponent
              image={yemenImage}
              title="Yemen: Provide Urgent Relief"
              description="In Yemen, years of war have led to one of the world's worst humanitarian crises. Millions of children face starvation, lack of medical care, and unsafe living conditions. With infrastructure destroyed, access to clean water and education is severely limited."
              donateLink="https://yemen-donation.com"
              position="left"
            />

            {/* somalia */}
            <DonationComponent
              image={somaliaImage}
              title="Somalia: Fight Hunger and Instability"
              description="In Somalia, prolonged drought and conflict have led to severe food shortages, forcing millions into crisis. Children suffer from extreme malnutrition, lack of healthcare, and displacement, struggling to survive in one of the world's harshest humanitarian emergencies."
              donateLink="https://somalia-donation.com"
              position="right"
            />

            {/* syria */}
            <DonationComponent
              image={syriaImage}
              title="Syria: Rebuild Lives After War"
              description="In Syria, years of conflict have left millions displaced, with children facing hunger, lack of medical care, and unsafe living conditions. Schools and hospitals lie in ruins, making education and healthcare nearly inaccessible, while families struggle to survive amid ongoing instability."
              donateLink="https://syria-donation.com"
              position="left"
            />

            {/* Afghanistan */}
            <DonationComponent
              image={afghanistanImage}
              title="Afghanistan: Support Families in Crisis"
              description="In Afghanistan, ongoing conflict and economic collapse have left millions in extreme poverty. Children face severe malnutrition, lack of medical care, and limited access to education, struggling to survive amid instability and humanitarian crisis."
              donateLink="https://afghanistan-donation.com"
              position="right"
            />

            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xmA5rfCiolk?si=wxheWGSzv_Sh1ndF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
          </Stack>
        </Container>
      </Section>
    </Box>
  );
}
