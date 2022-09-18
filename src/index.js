import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://ghsdk.iran.liara.run/api/v1';

ReactDOM.render(<App /> , document.getElementById('root'))
  