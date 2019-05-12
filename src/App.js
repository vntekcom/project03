import React, { Component } from 'react';
import './App.css';
//IMPORT COMPONENTS
import ModalPopup from './Components/ModalPopup';
import Controls from './Components/Controls';
import TaskItem from './Components/TaskItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls />
              {/* DISPLAY */}
              <TaskItem />
            </div>
          </div>
          
          {/* The Modal */ }
          <ModalPopup />
        </div>
      </div>
    );
  }
}

export default App;
