
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table/react-table.css';

ReactDOM.render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>,
  document.getElementById('root'),
);
