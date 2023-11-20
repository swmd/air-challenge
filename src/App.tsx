import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { authenticatedRouter } from "./routes/AuthenticatedRoutes";
import "./App.css";
import "@mantine/core/styles.css";

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
