import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import './assets/fonts/ZenKakuGothicNew-Black.ttf'

const theme = createTheme({
    typography: {
        fontFamily: 'Zen Kaku Gothic New, sans-serif'
    }
})

ReactDOM.createRoot(document.getElementById("root")).render(
   <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
       <App />
    </SnackbarProvider>
   </ThemeProvider> 
    
);
