export const startDate = new Date("2025-01-01");
const today = new Date();

const dataSets = [
  [2240, 500, 400000],
  [53435, 500, 350000],
  [43320, 500, 250000],
  [2014, 500, 150000],
  [2800, 500, 200000],
  [4352, 100, 150000],
  [6352, 100, 150000],
  [4362, 100, 150000],
];

export const calculateMealsData = () => {
  let totalValue = 0;
  let totalPercentage = 0;

  dataSets.forEach(([initialValue, dailyIncrease, totalMeals]) => {
    const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const value = initialValue + daysElapsed * dailyIncrease;
    const percentage = (value / totalMeals) * 100;
    totalValue += value;
    totalPercentage += percentage;
  });

  return { totalValue, totalPercentage };
};
