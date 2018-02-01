import React, { Component } from 'react';
import './App.css';
//import './ui-toolkit/css/nm-cx/main.css';
import TitleEntry from './TitleEntry'
import TitleSelect from './TitleSelect'
import ItemArea from './ItemArea'

class App extends Component {
  render() {
    return (
      <div style={{padding: "8px"}}>
      <div className="bg-off-white padding-medium">
        <h1 className="padding-bottom-medium">Dojo Dossier</h1>
        <TitleEntry />
        <TitleSelect />
        <ItemArea />
      </div>
      </div>
    );
  }
}

export default App;

