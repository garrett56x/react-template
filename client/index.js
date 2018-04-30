import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

const renderApp = () => {
  try {
    render(<App />, document.getElementById('root'));
  } catch (error) {
    console.warn('Render exception!', error);
  }
};

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    renderApp();
  });
}

renderApp();
