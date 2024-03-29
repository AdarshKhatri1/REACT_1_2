import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Practice from './Component/Practice';
import Cprac from './Chakkra/Cprac';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Grid from './Chakkra/Grid';

const root = ReactDOM.createRoot(document.getElementById('root'));

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Practice />

  // CHAKRA HERE

  
  <ChakraProvider theme={theme}>
        {/* <Cprac/>
         */}

         <Grid />
  </ChakraProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
