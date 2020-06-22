/** React */
import React, { Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/** React-Router-dom */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Container */
import AppContainer from './AppContainer';

/** Pages */
// import Landing from './Pages/LandingPage/Landing';
// import Search from './Pages/SearchPage/Search';
import { createErrorPageComponent } from './Pages/ErrorPage/ErrorPage';
// import Login from './Pages/LoginPage/Login';
// import SignUp from './Pages/LoginPage/SignUp';
// import SignupReseult from './Pages/LoginPage/SignupResult';
import { theme } from './util/theme'
import { ThemeProvider } from 'styled-components';


/** Lazy Loading */
const Landing = lazy( () =>  import('./Pages/LandingPage/Landing'))
const Login = lazy( () =>  import('./Pages/LoginPage/Login'))
const SignUp = lazy( () =>  import('./Pages/LoginPage/SignUp'))
const SignUpResult = lazy( () =>  import('./Pages/LoginPage/SignupResult'))
const Search = lazy( () =>  import('./Pages/SearchPage/Search'))

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer>
        <Suspense fallback={<div>...loading...</div>}>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/signup/result" exact component={SignUpResult}/>
            <Route path="/search/:searchTerm" component={Search}/>
            <Route component={createErrorPageComponent('antd', 404)}></Route>
          </Switch>
          </Suspense>
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
