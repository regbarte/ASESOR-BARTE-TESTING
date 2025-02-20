import React from "react";
import NewsLetter from "./NewsLetter"; 

export default {
  title: "Components/NewsLetter",
  component: NewsLetter,
  parameters: {
    layout: "centered",
  },
};

export const Default = () => <NewsLetter />;

export const Modern = () => (
  <div
    className="p-4"
    style={{
      background: "linear-gradient(135deg, #232526, #414345)",
      color: "#f2f2f2",
      fontFamily: "Helvetica, sans-serif",
      textAlign: "center",
    }}
  >
    <NewsLetter
      title="Stay Updated with Modern Trends"
      description="Get the latest trends and news directly to your inbox."
      buttonText="Subscribe Now"
    />
  </div>
);

export const Vibrant = () => (
  <div
    className="p-4"
    style={{
      background: "linear-gradient(135deg, #ff0099, #493240)",
      color: "#f0f0f0",
      fontFamily: "Verdana, sans-serif",
      textAlign: "center",
    }}
  >
    <NewsLetter
      title="Join the Vibrant Community"
      description="Be part of a vibrant and dynamic community."
      buttonText="Join Us"
    />
  </div>
);
