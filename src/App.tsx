import React from 'react';
import './App.css';



import Search from './Pages/SearchPage/Search'
import NavBar from './NavigationBar'

// 임시 주석 처리
// import 'antd/dist/antd.css';

import './index.css';

import styled from 'styled-components'

import { BrowserRouter as browserHistory, Router, Route, Link, Switch, NavLink, RouteComponentProps } from "react-router-dom";




/** Pages */

class App extends React.Component<RouteComponentProps> {

  constructor(props: RouteComponentProps) {
    super(props);
    
    this.props.history.listen((location, action) => {
      if (location.pathname === "/") {
        document.body.classList.add("scrollrable")
      } else {
        document.body.classList.remove("scrollrable")
      }
    });
  }

  componentDidMount() {
    
  }


  render(){

    return (
      <>
      <NavBar history={this.props.history} match={this.props.match} location={this.props.location}></NavBar>
      {this.props.children}
      </>
    );
  }
}
export default App;