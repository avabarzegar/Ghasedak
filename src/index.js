import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos';

ReactDOM.render(<App /> , document.getElementById('root'))
  