require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fd1ff818e8c931961673b42').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count;
}

deleteTaskAndCount('5fd271697f2dea32479afdfd').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});