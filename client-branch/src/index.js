import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal from 'react-modal';

import { BrowserRouter as Router } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

Modal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Router>
  </React.StrictMode>
);
