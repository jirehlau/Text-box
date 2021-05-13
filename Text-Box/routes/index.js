var express = require('express');
var router = express.Router();
let todosCTRL = require('../controllers/todosCTRL')

let todosModel = require('../data/todoData.js')

router.get('/',function(req,res,next){
    res.render('index.ejs', {
        title: 'Text-Box',
        todoArray: todosModel.todos,
    })
})

router.post('/submission', todosCTRL.submitted)

/* GET home page. */
// let todosCtrl = require("../controllers/todosCTRL");

// router.get("/", todosCtrl.index);
// router.post("/submission", todosCtrl.addToList);

module.exports = router;
