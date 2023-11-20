import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { authenticatedRouter } from "./routes/AuthenticatedRoutes";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={authenticatedRouter} />
    </MantineProvider>
  );
}

export default App;
