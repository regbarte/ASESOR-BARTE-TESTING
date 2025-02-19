import React from "react";
import Navbar from "./Navbar";
import { AppContext } from "@/context/AppContext";

const mockRouter = {
  push: (url) => console.log(`Routing to: ${url}`),
};

const MockAppContextProvider = ({ children, isSeller, user }) => (
  <AppContext.Provider value={{ isSeller, user, router: mockRouter }}>
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
      <MockAppContextProvider isSeller={context.args.isSeller} user={context.args.user}>
        <Story />
      </MockAppContextProvider>
    ),
  ],
};

export const Default = () => <Navbar />;

export const LoggedInUser = () => (
  <MockAppContextProvider user={{ name: "John Doe", avatar: "/avatar.png" }}>
    <Navbar />
  </MockAppContextProvider>
);

export const SellerDashboard = () => (
  <MockAppContextProvider isSeller={true}>
    <Navbar />
  </MockAppContextProvider>
);
