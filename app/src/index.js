import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { ThemeGeneral } from './theme/ThemeGeneral';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ThemeGeneral}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

