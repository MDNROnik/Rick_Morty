import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Cast from "./Components/Cast.jsx";
import Casts from "./Components/Casts.jsx";
import DataProvider from "./Context/DataProvider.jsx";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("https://rickandmortyapi.com/api"),
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/casts",
        element: <Casts />,
      },
      {
        path: "/casts/:id",
        element: <Cast />,
      },
    ],
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
