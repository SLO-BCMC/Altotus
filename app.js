var express = require("express");
var path = require("path");
var routes = require("./routes/home_routes");
var app = express();


app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/scripts', express.static(path.join(__dirname, '/scripts')));
app.use('/images', express.static(path.join(__dirname, '/images')));

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);


app.listen(app.get("port"), function(){
    console.log("server started at " + app.get("port"))
})
