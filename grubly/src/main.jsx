import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";
import ErrorPage from "./components/error/ErrorPage.jsx";
import Body from "./components/Body.jsx";
import RestaurantDetailPage from "./components/layout/restaurantDetailPage/RestaurantDetailPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetailPage />,
      },
    ],
    errorElement: <ErrorPage />
  },
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);


