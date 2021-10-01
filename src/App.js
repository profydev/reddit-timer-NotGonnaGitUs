import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import GlobalStyle from './css/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>App Placeholder</div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={Search} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
