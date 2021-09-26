import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router } from 'react-router-dom';

// Context Provider
import AppProvider from './store'

// Routes
import Routes from './routes';
import history from './services/history';

// Styles
import GlobalStyle from './styles/global';
import AOS from 'aos';

// Google Analytics
import { initGA } from './utils/googleAnalytics';

// Initialize google analytics page view tracking
initGA();

// Initialize AOS package
AOS.init();

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default hot(App);
