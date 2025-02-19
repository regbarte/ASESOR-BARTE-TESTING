import React from "react";
import Banner from "./Banner";

export default {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
};

export const Default = () => <Banner />;

export const WithCustomMessage = () => (
  <Banner>
    <h2 className="text-red-500">🚀 Limited Time Deal! 🚀</h2>
  </Banner>
);

export const WithImageBackground = () => (
  <div
    className="p-4"
    style={{
      backgroundImage: "url('https://source.unsplash.com/random/800x200')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Banner>
      <h2 className="text-white">Welcome to Our Exclusive Sale!</h2>
    </Banner>
  </div>
);
