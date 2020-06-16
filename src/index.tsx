/** React */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/** React-Router-dom */
import { BrowserRouter as Router, Route, Link, Switch, NavLink, RouteComponentProps } from "react-router-dom";

/** Container */
import AppContainer from './AppContainer';

/** Pages */
import Landing from './Pages/LandingPage/Landing';
import Search from './Pages/SearchPage/Search';
import { createErrorPage } from './Pages/ErrorPage/ErrorPage';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/LoginPage/SignUp';
import SignupReseult from './Pages/LoginPage/SignupResult';
import { theme } from './util/theme'
import styled, { ThemeProvider } from 'styled-components';
ReactDOM.render(
  
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/signup/result" exact component={SignupReseult}/>
            <Route path="/search/:id" component={Search}/>
            <Route component={createErrorPage("antd", "404")}></Route>
          </Switch>
        </AppContainer>
      </ThemeProvider>
    </Router>

      {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
