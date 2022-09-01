import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
