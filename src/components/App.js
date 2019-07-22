import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

// import PageNotFound from './pageNotFound/pageNotFound';
import Layout from './Layout'

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/app" />} />
            <Route path="/app" render={props => <Layout {...props} />} />
            {/* <Route component={PageNotFound} /> */}
          </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
export default App;
