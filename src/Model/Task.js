export default class Task{
    constructor(id, name, labelArr, priority, memIDArr, status, description){
        this.id = id;
        this.name = name;
        this.labelArr = labelArr;
        this.priority = priority;
        this.memIDArr = memIDArr;
        this.status = status;
        this.description = description;
    }
}