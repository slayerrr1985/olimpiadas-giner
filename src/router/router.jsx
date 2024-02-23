import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Section from "../Section";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/section",
    element: <Section />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
