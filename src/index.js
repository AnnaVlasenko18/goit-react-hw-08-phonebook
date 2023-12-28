import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './themeStyled';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
