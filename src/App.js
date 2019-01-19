// React imports
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
// Portfolio imports
import history from './routes/history';
import Layout from './components/layout/Layout';

/**
 * Application entry point made of a layout routed by React Router
 */
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout />
      </Router>
    );
  }
}

export default App;
