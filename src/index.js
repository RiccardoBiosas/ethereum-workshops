import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga'
import App from './components/App';
import config from './constants/config';
import reportWebVitals from './reportWebVitals';

const { gaTrackingId, isProduction } = config

if (typeof gaTrackingId === 'string' && isProduction) {
  console.log('init ga')
  ReactGA.initialize(gaTrackingId)
} else {
  ReactGA.initialize('test', { testMode: true, debug: true })
}

window.addEventListener('error', (error) => {
  ReactGA.exception({
    description: error.message,
    fatal: true,
  })
})

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
