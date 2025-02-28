import { Grid2, Container, Typography, Box } from "@mui/material";
import DonationCard from "../Components/DonationCard";
import { styled } from "@mui/system";
import palestine from "../assets/palestine.jpg";
import etiopia from "../assets/etiopia.jpg";
import sudan from "../assets/sudan.jpg";
import ukraine from "../assets/ukraine.jpg";
import afgha from "../assets/afgha.jpg";
import yemen from "../assets/yemen.jpg";
import syria from "../assets/syria.jpeg";
import somalia from "../assets/somalia.jpg";

const Section = styled(Box)({
  padding: "10px 0",
  textAlign: "center",
});

export default function FundraisingPage({ darkMode }) {
  const donationData = [
    {
      title: "Sudan: Help families conflict",
      image: sudan,
      totalMeals: 400000,
      currentMeals: 224000, // 56%
      supporters: 57989,
    },
    {
      title: "Palestine: Provide food aid",
      image: palestine,
      totalMeals: 350000,
      currentMeals: 82435, // 55%
      supporters: 98456,
    },
    {
      title: "Ukraine: Support families",
      image: ukraine,
      totalMeals: 250000,
      currentMeals: 72320, // 51%
      supporters: 76532,
    },
    {
      title: "Ethiopia: Combat crisis",
      image: etiopia,
      totalMeals: 380000,
      currentMeals: 201400, // 53%
      supporters: 65987,
    },
    {
      title: "Yemen: Provide emergency aid",
      image: yemen,
      totalMeals: 450000,
      currentMeals: 252000, // 56%
      supporters: 82934,
    },
    {
      title: "Somalia: Fight famine",
      image: somalia,
      totalMeals: 330000,
      currentMeals: 171600, // 52%
      supporters: 54238,
    },
    {
      title: "Syria: Humanitarian relief",
      image: syria,
      totalMeals: 410000,
      currentMeals: 221400, // 54%
      supporters: 67892,
    },
    {
      title: "Afghanistan: Help displaced people",
      image: afgha,
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
