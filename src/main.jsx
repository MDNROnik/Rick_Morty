import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Cast from "./Components/Cast.jsx";
import Casts from "./Components/Casts.jsx";
import DataProvider from "./Context/DataProvider.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("https://rickandmortyapi.com/api"),
  },
  {
    path: "/casts",
    element: <Casts />,
  },
  {
    path: "/casts/:id",
    element: <Cast />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
