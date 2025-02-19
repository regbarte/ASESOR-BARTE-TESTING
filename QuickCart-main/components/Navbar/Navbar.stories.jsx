import React from "react";
import Navbar from "./Navbar";
import { AppContext } from "@/context/AppContext";


const mockRouter = {
  push: (url) => console.log(`Routing to: ${url}`),
};

const MockAppContextProvider = ({ children, isSeller }) => (
  <AppContext.Provider value={{ isSeller, router: mockRouter }}>
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
    (Story, context) => (
      <MockAppContextProvider isSeller={context.args.isSeller}>
        <Story />
      </MockAppContextProvider>
    ),
  ],
};

export const Default = () => <Navbar />;
export const WithSellerDashboard = () => <Navbar isSeller={true} />;
export const MobileView = () => <div className="max-w-sm"><Navbar /></div>;
