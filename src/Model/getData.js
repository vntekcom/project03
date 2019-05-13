import Task from './Task';
import ListOfTask from './ListOfTask';
import TaskData from './TaskData';

let listOfTasks = new ListOfTask(); //khởi tạo listTask từ cấu trúc của class ListOfTask ban đầu

for(let task of TaskData){ //thực hiện vòng lặp để lấy ra dữ liệu từ DataSource
    let id = task.id;
    let name = task.name;
    let labelArr = task.labelArr;
    let priority = task.priority;
    let memIDArr = task.memberIDArr;
    let status = task.status;
    let description = task.description;

    let newTask = new Task(id, name, labelArr, priority, memIDArr, status, description) //Khởi tạo single Task từ class Task ban đầu
    listOfTasks.addTask(newTask);
}

export default listOfTasks;