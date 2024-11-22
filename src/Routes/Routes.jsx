import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";
import AdminDashboard from "../pages/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import Error from "../Error/Error";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchResultsPage />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      // {
      //   path: "/payment/:id",
      //   element: (
      //     <PrivateRoute>
      //       <PaymentForm />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

export default router;
