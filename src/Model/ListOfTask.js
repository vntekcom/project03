export default class ListOfTask{
    constructor(){
        this.list = [];
    }

    addTask = (task) => {
        this.list = [...this.list, task]
    }

    findTask = (id) => {
        for(let task of this.list){
            if(task.id === id){
                return task;
            }
        }
        return null;
    }

    findTaskIndex = (id) => {
        for(let i in this.list){
            if(this.list[i].id === id){
                return i;
            }
        }
        return null;
    }
}