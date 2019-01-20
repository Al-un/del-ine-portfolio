// React imports
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
// Redux (store)
import store from './redux/configureStore';
// Portfolio imports
import history from "./routes/history";
import Layout from './components/layout/Layout';

/**
 * Application entry point made of a layout routed by React Router
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout />
        </Router>
      </Provider>
    );
  }
}

export default App;
