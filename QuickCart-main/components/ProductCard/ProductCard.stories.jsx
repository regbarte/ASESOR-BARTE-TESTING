import React from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "@/context/AppContext";


const mockRouter = {
  push: (url) => console.log(`Routing to: ${url}`),
};


const MockAppContextProvider = ({ children }) => (
  <AppContext.Provider value={{ currency: "$", router: mockRouter }}>
    {children}
  </AppContext.Provider>
);


const defaultProduct = {
  _id: "12345",
  name: "Gaming Headset",
  description: "Immersive sound with noise cancellation.",
  image: ["/path-to-image.jpg"],
  offerPrice: "99.99",
};

const discountedProduct = {
  _id: "67890",
  name: "Wireless Gaming Mouse",
  description: "High-precision sensor with ergonomic design.",
  image: ["/path-to-mouse.jpg"],
  offerPrice: "49.99",
};

const outOfStockProduct = {
  _id: "54321",
  name: "Mechanical Keyboard",
  description: "RGB backlighting with responsive switches.",
  image: ["/path-to-keyboard.jpg"],
  offerPrice: "79.99",
  outOfStock: true,
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

export const Default = () => <ProductCard product={defaultProduct} />;
export const Discounted = () => <ProductCard product={discountedProduct} />;
export const OutOfStock = () => <ProductCard product={outOfStockProduct} />;
