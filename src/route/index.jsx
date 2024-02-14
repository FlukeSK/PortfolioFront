import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CatPage from "../pages/CatsPage";
import FoodPage from "../pages/FoodPage";
import QueuePage from "../pages/QuePage";
import InfoPage from "../pages/InfoPage";

const router = createBrowserRouter([
  {
    path: "/login",
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
        path: "home",
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
        path: "queue",
        element: <QueuePage />,
      },
      {
        path: "info",
        element: <InfoPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
