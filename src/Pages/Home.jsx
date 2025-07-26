import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import homeBack from "/home.jpg";
import ua1 from "/ua1.jpg";
import somaliaImage from "/somalia.jpg";
import syriaImage from "/syria.jpeg";
import afghanistanImage from "/afgha.jpg";
import yemenImage from "/yemen.jpg";
import ethiopiaImage from "/ethiopia.jpg";
import sudanImage from "/sudan.jpg";
import gif from "../assets/gif.gif";
import video from "../assets/video.mp4";
import { calculateMealsData } from "../Components/Common";
import DonationComponent from "../Components/DonationComponent";

const Section = styled(Box)({
  padding: "10px 0",
  textAlign: "center",
});

export default function Home({ darkMode }) {
  const result = calculateMealsData();

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
          // py: 8,
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", textAlign: "center" }}>
          <Box
            component="video"
            src={video}
            controls
            autoPlay
            muted
            loop
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "auto",
              borderRadius: 4,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
            }}
          />
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ mb: 3 }}
            >
              Together, we can end child hunger
            </Typography>
        </Container>
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
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/383px-Flag_of_Palestine.svg.png"
              urgent
              initialValue={53435}
              dailyIncrease={500}
              totalMeals={350000}
            />

            {/* ukraine */}
            <DonationComponent
              image={ua1}
              title="Ukraine: Support families"
              description="In Ukraine, war has displaced millions of children, forcing many into underground shelters or refugee life. They endure hunger, lack of 
              medical care, and deep psychological trauma, growing up in fear and uncertainty, often without schooling."
              donateLink="https://another-donation.com"
              position="right"
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/383px-Flag_of_Ukraine.svg.png"
              urgent
              initialValue={43320}
              dailyIncrease={500}
              totalMeals={250000}
            />

            {/* sudan */}
            <DonationComponent
              image={sudanImage}
              title="Sudan: Aid for Families"
              description="In Sudan, ongoing conflict has left millions displaced, struggling with extreme food shortages, lack of medical care, and violence. Children face severe malnutrition, disease outbreaks, and disrupted education, growing up in constant fear and instability."
              donateLink="https://sudan-donation.com"
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/383px-Flag_of_Sudan.svg.png"
              position="left"
              initialValue={2240}
              dailyIncrease={500}
              totalMeals={400000}
            />

            {/* ethiopia */}
            <DonationComponent
              image={ethiopiaImage}
              title="Ethiopia: Help Vulnerable Communities"
              description="In Ethiopia, ongoing conflict and drought have displaced thousands, leaving families without food, water, and medical care. Children suffer from severe malnutrition, lack of education, and the constant threat of violence, struggling to survive in extreme hardship."
              donateLink="https://ethiopia-donation.com"
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/383px-Flag_of_Ethiopia.svg.png"
              position="right"
              initialValue={2014}
              dailyIncrease={500}
              totalMeals={150000}
            />
            

            {/* yemen */}
            <DonationComponent
              image={yemenImage}
              title="Yemen: Provide Urgent Relief"
              description="In Yemen, years of war have led to one of the world's worst humanitarian crises. Millions of children face starvation, lack of medical care, and unsafe living conditions. With infrastructure destroyed, access to clean water and education is severely limited."
              donateLink="https://yemen-donation.com"
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/383px-Flag_of_Yemen.svg.png"
              position="left"
              initialValue={2800}
              dailyIncrease={500}
              totalMeals={200000}
            />

            {/* somalia */}
            <DonationComponent
              image={somaliaImage}
              title="Somalia: Fight Hunger and Instability"
              description="In Somalia, prolonged drought and conflict have led to severe food shortages, forcing millions into crisis. Children suffer from extreme malnutrition, lack of healthcare, and displacement, struggling to survive in one of the world's harshest humanitarian emergencies."
              donateLink="https://somalia-donation.com"
              position="right"
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/383px-Flag_of_Somalia.svg.png"
              initialValue={4352}
              dailyIncrease={100}
              totalMeals={150000}
            />

            {/* syria */}
            <DonationComponent
              image={syriaImage}
              title="Syria: Rebuild Lives After War"
              description="In Syria, years of conflict have left millions displaced, with children facing hunger, lack of medical care, and unsafe living conditions. Schools and hospitals lie in ruins, making education and healthcare nearly inaccessible, while families struggle to survive amid ongoing instability."
              donateLink="https://syria-donation.com"
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flag_of_the_Syrian_revolution.svg/330px-Flag_of_the_Syrian_revolution.svg.png"
              position="left"
              initialValue={6352}
              dailyIncrease={100}
              totalMeals={150000}
            />

            {/* Afghanistan */}
            <DonationComponent
              image={afghanistanImage}
              title="Afghanistan: Support Families in Crisis"
              description="In Afghanistan, ongoing conflict and economic collapse have left millions in extreme poverty. Children face severe malnutrition, lack of medical care, and limited access to education, struggling to survive amid instability and humanitarian crisis."
              donateLink="https://afghanistan-donation.com"
              flagUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/383px-Flag_of_the_Taliban.svg.png"
              position="right"
              initialValue={4362}
              dailyIncrease={100}
              totalMeals={150000}
            />
            
             <Box sx={{ textAlign: "center", mt: 8, mb: 4 }}>
              <Box
                component="img"
                src={gif}
                alt="Donation animation"
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "0 auto",
                  display: "block",
                  borderRadius: 4,
                }}
              />

            </Box>
          </Stack>
        </Container>
      </Section>
    </Box>
  );
}
