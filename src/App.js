import React, { Component } from 'react';
import Menu from 'menu/Menu';
import Main from 'main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
