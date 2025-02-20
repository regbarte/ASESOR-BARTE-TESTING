import React from "react";
import Banner from "./Banner";

export default {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
};

export const Elegant = () => (
  <div
    className="p-4"
    style={{
      background: "linear-gradient(135deg, #f2f2f2, #cccccc)",
      color: "#333",
      fontFamily: "Georgia, serif",
    }}
  >
    <Banner>
      <h2 className="text-xl font-semibold">Welcome to Our Elegant Collection</h2>
    </Banner>
  </div>
);

export const Festive = () => (
  <div
    className="p-4"
    style={{
      background: "linear-gradient(135deg, #ffeb3b, #ff9800)",
      color: "#fff",
      fontFamily: "Comic Sans MS, cursive, sans-serif",
      textAlign: "center",
    }}
  >
    <Banner>
      <h2 className="text-2xl font-bold">Holiday Season Sale!</h2>
      <p className="text-lg">Enjoy up to 50% off on all items!</p>
    </Banner>
  </div>
);

export const Nature = () => (
  <div
    className="p-4"
    style={{
      backgroundImage: "url('https://source.unsplash.com/800x200/?forest')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <Banner>
      <h2 className="text-2xl font-bold">Explore the Wilderness</h2>
      <p className="text-lg">Connect with nature and find your adventure</p>
    </Banner>
  </div>
);
