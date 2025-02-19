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
    <h2>Special Limited Offer</h2>
  </Banner>
);
export const DarkMode = () => (
  <div className="bg-gray-900 p-4">
    <Banner />
  </div>
);
