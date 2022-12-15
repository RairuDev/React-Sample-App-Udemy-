// before

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// before

// after

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// after

// import './App.css';
import App from './App';

// after

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// after



// before
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// before
