import React from "react";
import Navbar from "./Navbar";
import { AppContext } from "@/context/AppContext"; 



const mockRouter = {
  push: (url) => console.log(`Routing to: ${url}`),
};


const MockAppContextProvider = ({ children }) => (
  <AppContext.Provider value={{ isSeller: true, router: mockRouter }}>
    {children}
  </AppContext.Provider>
);

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MockAppContextProvider>
        <Story />
      </MockAppContextProvider>
    ),
  ],
};

export const Default = () => <Navbar />;


// buttons tested are the home, shop, about us, contact
