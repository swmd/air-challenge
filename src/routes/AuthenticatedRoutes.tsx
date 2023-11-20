import { createBrowserRouter } from "react-router-dom";
import { Gallery } from "../pages/gallery";

export const authenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Gallery />,
  },
]);
