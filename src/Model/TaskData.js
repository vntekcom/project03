const  randomID = require("random-id");

// Priority -->1: Cao, 2: Thấp, 3: Trung bình
//label --> 0:sale, 1:Mart, 2.Admin, 3.CS
const TasksData = [
    {
        id: randomID(5, "aA0"),
        name: "Soạn ReactJS",
        labelArr: [0,2],
        priority: 1, 
        memberIDArr: ["user_1","user_2"],
        status: 2, 
        description: "Phải soạn ReactJS kèm với NodeJS và Redux"
    },
    {
        id: randomID(5, "aA0"),
        name: "Dạy AngularJS",
        labelArr: [0,1],
        priority: 2, 
        memberIDArr: ["user_4", "user_5"],
        status: 1,
        description: "Nội dung của Angular rất dài và khó"
    },
    {
        id: randomID(5, "aA0"),
        name: "Soạn Python",
        labelArr: [0,3],
        priority: 2, 
        memberIDArr: ["user_3", "user_5"],
        status: 1,
        description: "Soạn python phải tập trung vào game và giải quyết vấn đề"
    },
    {
        id: randomID(5, "aA0"),
        name: "Thi Hackathon",
        labelArr: [0,1,2],
        priority: 3, 
        memberIDArr: ["user_2", "user_3", "user_4", "user_5"],
        status: 3,
        description: "Cuộc thi đòi hỏi tư duy và kỹ năng coding"
    },
]

export default TasksData;