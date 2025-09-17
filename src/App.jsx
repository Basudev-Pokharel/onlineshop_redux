import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Users from "./components/Users";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Carts from "./components/Carts";
import Layout from "./hooks/Layout";
let route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Products></Products>,
      },
      {
        path: "carts",
        element: <Carts></Carts>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
      {/* <Products /> */}
      {/* <Users /> */}
    </>
  );
}

export default App;
