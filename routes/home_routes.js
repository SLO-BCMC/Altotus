var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.render("home/home");
});

router.get("/biochemistry", function(req, res){
    res.render("home/biochemistry")
});

router.get("/inprogress", function(req, res){
    res.render("home/inprogress")
})

router.get("/aminoAcids", function(req, res){
    res.render("questions/biochemistry/aminoAcids")
});

router.get("/nucleicAcids", function(req, res){
    res.render("questions/biochemistry/nucleicAcids")
});

module.exports = router;