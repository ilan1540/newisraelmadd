import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Navbar from './componants/layout/Navbar';
import Routes from './componants/routes/Routes';
import { StartFunc } from './StartFunc';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <StartFunc />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
