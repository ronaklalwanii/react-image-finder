import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search.js'
import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <NavBar />
            <Search />
        </MuiThemeProvider>
    );
  }
}

export default App;
