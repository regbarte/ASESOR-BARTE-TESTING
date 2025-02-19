import React from "react";
import NewsLetter from "./NewsLetter"; 

export default {
  title: "Components/NewsLetter",
  component: NewsLetter,
};

export const Default = () => <NewsLetter />;

export const WithCustomTitle = () => (
  <NewsLetter
    title="Sign up for exclusive offers!"
    description="Get the latest updates on our products and services."
  />
);

export const WithCustomButtonText = () => (
  <NewsLetter
    title="Join our community!"
    description="Stay connected and never miss an update."
    buttonText="Join Now"
  />
);