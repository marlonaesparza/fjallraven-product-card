import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import "./styles/index.css"
import {getProduct, getProductType, getProductReview} from './utils/axiosRequests.js'

const root = document.getElementById('card-content');
ReactDOM.render(<App getProduct={getProduct} getProductType={getProductType} getProductReview={getProductReview}/>, root);
