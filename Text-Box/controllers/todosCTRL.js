let TODOS = require("../data/todoData")
let TODOARRAY = TODOS.todos


function submitted(req,res){
    console.log(req.body)
    console.log(TODOARRAY)
    TODOARRAY.push(req.body.TODO)
    res.redirect('/')
}

module.exports ={
    submitted,
}



// function index(req,res){
//     res.render('index', {todos: TODOARRAY})
// }

// function addToList(req,res){
//     req.body.done = false;
//     TODOARRAY.push(req.body);
//     console.log(req.body)
//     res.redirect('/submission')
// }


// module.exports = {
//     index,
//     addToList,
// };

