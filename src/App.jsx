import React from 'react';
import './App.css';
import AppRoutes from './routes/routes';
import {
  ChakraProvider
} from "@chakra-ui/react";


function App() {

  return (
    <>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;