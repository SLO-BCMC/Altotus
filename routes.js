var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    console.log("hello")
    res.render("home/home");
});

router.get("/question", function(req, res){
    res.render("question/question")
});
router.get("/biochemistry_home", function(req, res){ 
    console.log("penis")
    res.render("home/biochemistry_home")
})

module.exports = router;