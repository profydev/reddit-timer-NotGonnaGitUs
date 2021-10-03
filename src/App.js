import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './css/globalStyles';
import theme from './theme';
import Home from './pages/home';
import Search from './pages/search';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;
