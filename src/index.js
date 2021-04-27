import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './Pages/Home';
import { store } from './Store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();