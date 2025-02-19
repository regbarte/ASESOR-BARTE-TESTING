import React from "react";
import OrderSummary from "./OrderSummary"; 
import { addressDummyData } from "@/assets/assets"; 
import { AppContext } from '@/context/AppContext';

const mockContext = {
  currency: "$",
  router: {
    push: () => console.log("Navigating to add address page"),
  },
  getCartCount: () => 3,
  getCartAmount: () => 150,
};

const MockAppContextProvider = ({ children }) => (
  <AppContext.Provider value={mockContext}>
    {children}
  </AppContext.Provider>
);

export default {
  title: "Components/OrderSummary",
  component: OrderSummary,
  decorators: [MockAppContextProvider], 
};

export const Default = () => <OrderSummary />;
export const NoAddressSelected = () => <OrderSummary selectedAddress={null} />;
export const AddressSelected = () => <OrderSummary selectedAddress={addressDummyData[0]} />;