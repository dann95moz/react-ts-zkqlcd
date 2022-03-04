import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Login from './src/components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style'

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
 
        <Login/>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
