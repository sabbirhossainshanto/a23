import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import StateProvider from "./context/StateProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster toastOptions={{
        style:{
          // backgroundColor:'li',
          // color:'#fff',
          border: '1px solid #713200',
          padding: '10px',
          color: '#713200',
        }
      }} />
    </StateProvider>
  </React.StrictMode>
);
