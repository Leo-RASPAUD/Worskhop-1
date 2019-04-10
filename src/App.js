import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './config/amplify';
import './App.css';
import Toolbar from './components/Toolbar';
import TodoApp from './components/TodoApp';


Amplify.configure(config);

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100vh'}}>
        <Toolbar />
        <TodoApp />
      </div>
    );
  }
}

export default withAuthenticator(App);
