import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Dashboard from './components/layout/Dashboard';
import ProtectedRoute from './components/routing/ProtectedRoute';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <ProtectedRoute
              exact
              path='/dashboard'
              component={Dashboard}
            />{' '}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
