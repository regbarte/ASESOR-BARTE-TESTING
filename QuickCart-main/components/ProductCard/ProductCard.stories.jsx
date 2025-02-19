import React from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "@/context/AppContext";
// import { assets } from "@/assets/assets";

const mockRouter = {
  push: (url) => console.log(`Routing to: ${url}`),
};

const MockAppContextProvider = ({ children }) => (
  <AppContext.Provider value={{ currency: "$", router: mockRouter }}>
    {children}
  </AppContext.Provider>
);

const sampleProduct = {
  _id: "1111",
  name: "Gaming headset ",
  description: "with LED and sound cancellation",
  image: ["bose_headphone_image.png"],
  offerPrice: "1,000",
};

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MockAppContextProvider>
        <Story />
      </MockAppContextProvider>
    ),
  ],
};

export const Default = () => <ProductCard product={sampleProduct} />;
