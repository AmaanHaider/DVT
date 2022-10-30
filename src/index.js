import React from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";
import App from './App'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>
</React.StrictMode>
);