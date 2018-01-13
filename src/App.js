import React, { Component } from 'react';
import './App.css';

class List extends Component{
    render(){
        return(
            <div classNAme="liste">ici c'est ma liste</div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <List />
        </p>
      </div>
    );
  }
}

export default App;
