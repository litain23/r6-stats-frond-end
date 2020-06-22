import React from 'react';
import './App.css';
import NavBar from './NavigationBar'

// 임시 주석 처리 - 다크모드 테스트 
// import 'antd/dist/antd.css';

import './index.css';
import { RouteComponentProps } from 'react-router-dom';


/** Pages */
class App extends React.Component<RouteComponentProps> {

  constructor(props: RouteComponentProps) {
    super(props);

    this.props.history.listen((location, action) => {
      if (location.pathname === "/") {
        document.body.classList.add("not-scrollrable")
        document.body.scrollTo(0,0);
      } else {
        document.body.classList.remove("not-scrollrable")
      }
    });
  }

  componentDidMount() {

    if (this.props.location.pathname === "/") {
      document.body.classList.add("not-scrollrable")
      document.body.scrollTo(0,0);
    } else {
      document.body.classList.remove("not-scrollrable")
    }
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