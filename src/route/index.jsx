import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CatPage from "../pages/CatsPage";
import FoodPage from "../pages/FoodPage";
import QuePage from "../pages/admin/QuePage";
import InfoPage from "../pages/InfoPage";
import Container from "../layouts/Container";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Gift from "../pages/Gift";

import CheckQueue from "../pages/admin/CheckQueue";
import ChangPassword from "../pages/ChangePassword";
import RunQue from "../pages/miniFoodPage/RunQue";

const router = createBrowserRouter([
  {
    path: "login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cat",
        element: <CatPage />,
      },
      {
        path: "food",
        element: <FoodPage />,
      },
      {
        path: "gift",
        element: <Gift />,
      },
      {
        path: "info",
        element: <InfoPage />,
      },
      {
        path: "queue",
        element: <QuePage />,
      },
      {
        path: "checkqueue",
        element: <CheckQueue />,
      },
      {
        path: "changepassword",
        element: <ChangPassword />,
      },
      {
        path: "runqueue",
        element: <RunQue />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
