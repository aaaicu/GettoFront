import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
// import { CookiesProvider } from 'universal-cookie';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  // </CookiesProvider>
  // </React.StrictMode>
);

reportWebVitals();
