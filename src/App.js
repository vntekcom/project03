import React, { Component } from 'react';
import './App.css';

//IMPORT COMPONENTS
import ModalPopup from './Components/ModalPopup';
import Controls from './Components/Controls';
import TaskItem from './Components/TaskItem';

//IMPORT DATA
import listOfTasks from './Model/getData';
var randomID = require('random-id');

class App extends Component {

  //CONSTRUCTOR
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isAddNewTask: true,
      taskEditing: null,

      //FILTER
      filterType: '',
      filterProgress: -1,
      filterSearch: '',
    }
  }

  generateData = () => {
    localStorage.setItem('tasks', JSON.stringify(listOfTasks.list));
  }

  clearForAddNewTask = () => {
    this.setState({
      isAddNewTask: true
    })
  }

  addNewTask = (data) => {
    if(this.state.isAddNewTask){
      let tasksJSON = JSON.parse(localStorage.getItem('tasks'))
      data.id = randomID(5, "aA0") 
      data.status = 0
      data.priority = parseInt(data.priority)
      tasksJSON = [...tasksJSON, data] 
      localStorage.setItem('tasks', JSON.stringify(tasksJSON))
      this.setState({
        tasks: tasksJSON
      })
    }
  }

  changedProgress = (id, progress) => {
    let tasksJSON = JSON.parse(localStorage.getItem('tasks')); 
    for (let i in tasksJSON){
      if(tasksJSON[i].id === id){
        tasksJSON[i].status = parseInt(progress,10)
      }
    }
    this.setState({
      tasks: tasksJSON
    })
    localStorage.setItem('tasks', JSON.stringify(tasksJSON));
  }

  editTask = (data) => {
    this.setState({
      isAddNewTask: false,
      taskEditing: data
    })
  }

  changeFilterProgress = (filterProgress) => {
    this.setState({
      filterType: 'filterProgress',
      filterProgress: filterProgress
    })
  }

  changeFilterLabel = (filterLabel) => {
    this.setState({
      filterType: 'filterLabel',
      filterLabel: filterLabel
    })
  }

  changeFilterPriority = (filterPriority) => {
    this.setState({
      filterType: 'filterPriority',
      filterPriority: filterPriority
    })
  }

  changeFilterSearch = (filterSearch) => {
    // console.log(filterSearch)
    this.setState({
      filterType: 'filterSearch',
      filterSearch: filterSearch
    })
  }

  onEditTask = (data) => {
    if(!this.state.isAddNewTask){
      let tasksJSON = JSON.parse(localStorage.getItem('tasks')); 
      for(let i in tasksJSON){
        if(tasksJSON[i].id === data.id){
          tasksJSON[i].name = data.name
          tasksJSON[i].labelArr = data.labelArr
          tasksJSON[i].priority = data.priority
          tasksJSON[i].memIDArr = data.memIDArr
          tasksJSON[i].status = data.status
          tasksJSON[i].description = data.description
        }
      }
      localStorage.setItem('tasks', JSON.stringify(tasksJSON));
      this.setState({
        tasks: tasksJSON
      })
    }
  }

  //KHỞI TẠO KHI COMPONENT VỪA TẠO
  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks: tasksJSON
    })
  }

  render() {

    let { tasks, isAddNewTask, taskEditing, filterProgress, filterLabel, filterPriority, filterSearch, filterType } = this.state;

    return (
      <div className="App">
        <div>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls 
                generateData={this.generateData}
                clearForAddNewTask={this.clearForAddNewTask}
                changeFilterProgress={this.changeFilterProgress}
                changeFilterLabel={this.changeFilterLabel}
                changeFilterPriority={this.changeFilterPriority}
              />
              {/* DISPLAY */}
              <TaskItem 
                tasks={ tasks }
                editTask={this.editTask}
                changedProgress={this.changedProgress}
                changeFilterSearch={this.changeFilterSearch}
                filterProgress={filterProgress}
                filterType={filterType}
                filterLabel={filterLabel}
                filterPriority={filterPriority}
                filterSearch={filterSearch}
              />
            </div>
          </div>
          
          {/* The Modal */ }
          <ModalPopup 
            addNewTask={this.addNewTask}
            onEditTask={this.onEditTask}
            isAddNewTask={isAddNewTask}
            taskEditing={taskEditing}
          />
        </div>
      </div>
    );
  }
}

export default App;
