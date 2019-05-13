import React, { Component } from 'react';
import './App.css';

//IMPORT COMPONENTS
import ModalPopup from './Components/ModalPopup';
import Controls from './Components/Controls';
import TaskItem from './Components/TaskItem';

//IMPORT DATA
import listOfTasks from './Model/getData';

class App extends Component {

  ////CONSTRUCTOR
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }

  generateData = () => {
    localStorage.setItem('tasks', JSON.stringify(listOfTasks.list));
  }

  ////KHỞI TẠO KHI COMPONENT VỪA TẠO
  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks: tasksJSON
    })
  }

  render() {
    let { tasks } = this.state;
    return (
      <div className="App">
        <div>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls 
                generateData={this.generateData}
              />
              {/* DISPLAY */}
              <TaskItem 
                tasks={ tasks }
              />
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
