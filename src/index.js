import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://ghsdk.iran.liara.run/api/v1';

const container= document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);

