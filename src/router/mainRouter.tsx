import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import MainLayout from "../layout/mainLayout";
import HomePageScreen from "../pages/home/HomePageScreen";
import AuthLayout from "../layout/authLayout";
import RegisterScreen from "../pages/auth/RegisterScreen";
import LoginScreen from "../pages/auth/LoginScreen";
import LandingPageScreen from "../pages/screen/LandingPageScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePageScreen />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterScreen />,
      },
      {
        index: true,
        path: "login",
        element: <LoginScreen />,
      },
    ],
  },
  {
    path: "/",
    element: <LandingPageScreen />,
  },
]);
