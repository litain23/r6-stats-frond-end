import React from 'react';
import './App.css';

import Search from './Pages/SearchPage/Search'
import Landing from './Pages/LandingPage/Landing'
import NavBar from './NavigationBar'

// import 'antd/dist/antd.css';

import './index.css';

import styled from 'styled-components'


import { BrowserRouter as Router, Route, Link, Switch, NavLink, RouteComponentProps } from "react-router-dom";
import { createErrorPage } from './Pages/ErrorPage/ErrorPage';

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

class App extends React.Component {
  render(){
    return (
      <>
      <Router>
      <NavBar></NavBar>
      {/* <Container> */}
        <Search></Search>
      {/* </Container> */}
      
        {/* <Switch>
          <Route component={createErrorPage("antd", "404")}></Route>
        </Switch> */}
      </Router>
      </>
    );
  }
}
export default App;