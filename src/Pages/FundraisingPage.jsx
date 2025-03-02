import { Grid2, Container, Typography, Box } from "@mui/material";
import DonationCard from "../Components/DonationCard";
import { styled } from "@mui/system";

const Section = styled(Box)({
  padding: "10px 0",
  textAlign: "center",
});

export default function FundraisingPage({ darkMode }) {
  const donationData = [
    {
      title: "Sudan: Help families conflict",
      image:
        "https://www.sos-childrensvillages.org/getmedia/0f616f64-15f7-434e-96cf-6993f8246483/MAIN-Khartoum-Sudan-People-fleeing-fighting-AFP.jpg?width=1920&height=1080&ext=.jpg",
      totalMeals: 400000,
      currentMeals: 224000, // 56%
      supporters: 57989,
    },
    {
      title: "Palestine: Provide food aid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDgZxJ_i7AbU6ZUEu7y1KwM-MntQErEgUOQ&s",
      totalMeals: 350000,
      currentMeals: 82435, // 55%
      supporters: 98456,
    },
    {
      title: "Ukraine: Support families",
      image:
        "https://d3i6fh83elv35t.cloudfront.net/static/2023/02/GettyImages-1246057605-1024x683.jpg",
      totalMeals: 250000,
      currentMeals: 72320, // 51%
      supporters: 76532,
    },
    {
      title: "Ethiopia: Combat crisis",
      image:
        "https://s.abcnews.com/images/Politics/tigray-gty-rc-210527_1622120835745_hpMain.jpg",
      totalMeals: 380000,
      currentMeals: 201400, // 53%
      supporters: 65987,
    },
    {
      title: "Yemen: Provide emergency aid",
      image:
        "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/01/01/1909711-842396305.jpg?itok=F2fCoBHa",
      totalMeals: 450000,
      currentMeals: 252000, // 56%
      supporters: 82934,
    },
    {
      title: "Somalia: Fight famine",
      image:
        "https://static01.nyt.com/images/2022/12/05/multimedia/00somalia-famine-1-1-93b0/00somalia-famine-1-1-93b0-videoSixteenByNineJumbo1600.jpg",
      totalMeals: 330000,
      currentMeals: 171600, // 52%
      supporters: 54238,
    },
    {
      title: "Syria: Humanitarian relief",
      image:
        "https://disasterphilanthropy.org/wp-content/uploads/2022/09/Fb6_3TEWQAEldlj.jpeg",
      totalMeals: 410000,
      currentMeals: 221400, // 54%
      supporters: 67892,
    },
    {
      title: "Afghanistan: Help displaced people",
      image: "https://www.unhcr.org/sites/default/files/RF1318822.jpg",
      totalMeals: 450000,
      currentMeals: 243000, // 54%
      supporters: 94567,
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
              <DonationCard {...donation} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
