import { Grid2, Container, Typography, Box } from "@mui/material";
import DonationCard from "../Components/DonationCard";
import { styled } from "@mui/system";
import { useState } from "react";

const Section = styled(Box)({
  padding: "10px 0",
  textAlign: "center",
});

const startDate = new Date("2025-01-01");
const today = new Date();

const calculateMealsData = (initialValue, dailyIncrease, totalMeals) => {
  const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const value = initialValue + daysElapsed * dailyIncrease;
  const percentage = (value / totalMeals) * 100;
  return { value, percentage };
};

export default function FundraisingPage({ darkMode }) {
  const donationData = [
    {
      title: "Sudan: Help families conflict",
      image:
        "https://www.sos-childrensvillages.org/getmedia/0f616f64-15f7-434e-96cf-6993f8246483/MAIN-Khartoum-Sudan-People-fleeing-fighting-AFP.jpg?width=1920&height=1080&ext=.jpg",
      totalMeals: 400000,
      ...calculateMealsData(2240, 500),
      supporters: 15133,
    },
    {
      title: "Palestine: Provide food aid",
      image:
        "https://i.abcnewsfe.com/a/98f71dc5-dabe-467c-a93a-b08a0ab7ff36/gaza-food-2-gty-bb-240123_1706021565946_hpMain.jpg",
      totalMeals: 350000,
      ...calculateMealsData(53435, 500, 350000),
      supporters: 31249,
    },
    {
      title: "Ukraine: Support families",
      image:
        "https://d3i6fh83elv35t.cloudfront.net/static/2023/02/GettyImages-1246057605-1024x683.jpg",
      totalMeals: 250000,
      ...calculateMealsData(43320, 500, 250000),
      supporters: 11233,
    },
    {
      title: "Ethiopia: Combat crisis",
      image:
        "https://s.abcnews.com/images/Politics/tigray-gty-rc-210527_1622120835745_hpMain.jpg",
      totalMeals: 150000,
      ...calculateMealsData(2014, 500, 150000),
      supporters: 12499,
    },
    {
      title: "Yemen: Provide emergency aid",
      image:
        "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/01/01/1909711-842396305.jpg?itok=F2fCoBHa",
      totalMeals: 200000,
      ...calculateMealsData(2800, 500, 200000),
      supporters: 2142,
    },
    {
      title: "Somalia: Fight famine",
      image:
        "https://static01.nyt.com/images/2022/12/05/multimedia/00somalia-famine-1-1-93b0/00somalia-famine-1-1-93b0-videoSixteenByNineJumbo1600.jpg",
      totalMeals: 150000,
      ...calculateMealsData(4352, 100, 150000),
      supporters: 5429,
    },
    {
      title: "Syria: Humanitarian relief",
      image:
        "https://disasterphilanthropy.org/wp-content/uploads/2022/09/Fb6_3TEWQAEldlj.jpeg",
      totalMeals: 150000,
      ...calculateMealsData(6352, 100, 150000),
      supporters: 3420,
    },
    {
      title: "Afghanistan: Help displaced people",
      image: "https://www.unhcr.org/sites/default/files/RF1318822.jpg",
      totalMeals: 150000,
      ...calculateMealsData(4362, 100, 150000),
      supporters: 5438,
    },
  ];

  return (
    <Box
      sx={{ backgroundColor: darkMode, width: "100%" }}
      padding="100px 0px 50px 0px"
    >
      <Container maxWidth="100%">
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          gutterBottom
          mb={5}
          maxWidth="100%"
        >
          Choose where to donate
        </Typography>

        <Grid2 container spacing={3} justifyContent="center">
          {donationData.map((donation, index) => (
            <Grid2 key={index} xs={12} sm={6} md={4} lg={3}>
              <DonationCard {...donation} currentMeals={donation.value} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
