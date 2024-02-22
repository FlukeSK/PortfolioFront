import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CatPage from "../pages/CatsPage";
import FoodPage from "../pages/FoodPage";
import QueuePage from "../pages/QuePage";
import InfoPage from "../pages/InfoPage";
import Container from "../layouts/Container";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";

import CheckUser from "../pages/CheckUser";
import CheckQueue from "../pages/CheckQueue";
import ChangPassword from "../pages/ChangePassword";

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
        path: "info",
        element: <InfoPage />,
      },
      {
        path: "queue",
        element: <QueuePage />,
      },
      {
        path: "checkuser",
        element: <CheckUser />,
      },
      {
        path: "checkqueue",
        element: <CheckQueue />,
      },
      {
        path: "changepassword",
        element: <ChangPassword />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
