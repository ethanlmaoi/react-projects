import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    name: "Keanu Sky"
  }

  switchNameHandler = (newName) => {
    this.setState( {
      name: "Juliane Ong"
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} />
        <UserOutput 
          name={this.state.name} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
