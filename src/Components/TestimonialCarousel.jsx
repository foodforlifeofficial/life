import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quotes = [
  {
    text: "Food for Life is committed to providing nutritious meals to those in need, creating a hunger-free world.",
    author: "John Doe - Humanitarian Leader",
    image: "/path/to/image1.jpg",
  },
  {
    text: "Every meal shared is a step towards a healthier, happier future for children worldwide.",
    author: "Jane Smith - Philanthropist",
    image: "/path/to/image2.jpg",
  },
  {
    text: "Together, we can make sure that no one goes to bed hungry.",
    author: "Michael Brown - Social Activist",
    image: "/path/to/image3.jpg",
  },
  {
    text: "A small act of kindness, like sharing a meal, can change someone's life forever.",
    author: "Emily Johnson - Charity Founder",
    image: "/path/to/image4.jpg",
  },
  {
    text: "Compassion and action go hand in hand when fighting hunger.",
    author: "Robert White - Volunteer",
    image: "/path/to/image5.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card className="p-4 flex items-center justify-center">
      <CardContent className="flex flex-col items-center text-center">
        <img
          src={quotes[currentIndex].image}
          alt="Author"
          className="w-24 h-24 rounded-full mb-4"
        />
        <p className="text-lg font-semibold">{quotes[currentIndex].text}</p>
        <p className="text-sm text-gray-500">{quotes[currentIndex].author}</p>
        <div className="mt-4 flex gap-4">
          <Button onClick={prevQuote}>Previous</Button>
          <Button onClick={nextQuote}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCarousel;
