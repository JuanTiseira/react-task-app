import React from 'react';
import ReactDOM from 'react-dom/client';
//importacion de bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import reportWebVitals from './reportWebVitals';
import AppStyledRouting from './AppStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRouting /> */}
    <AppStyledRouting/>
  </React.StrictMode>
);
reportWebVitals();
