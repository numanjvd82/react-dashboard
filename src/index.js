// * react imports
import React from 'react';
import ReactDOM from 'react-dom';

// * Chakra import
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
// * redux related imports
import { Provider } from 'react-redux';
import store from './redux/storeConfig/store';
// * custom imports
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode="light" />
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
