import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: "not found",
  },
];
export const privateRoutes = [
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: "not found",
  },
];
