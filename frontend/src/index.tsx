import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import ErrorPage_404 from './pages/Error/404';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='*' component={ErrorPage_404} />
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root'),
);
