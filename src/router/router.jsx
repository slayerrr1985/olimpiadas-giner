import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../pages/home/Home";
import AnimatedRanking from "../pages/ranking/AnimatedRanking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mascot-ranking",
    element: <AnimatedRanking />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
