var app = require("express")();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var id = 2;
var tasks = [
    { id: 1, task: "test task", isDone:false }
];

app.get("/task", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({tasks: tasks});
});

app.post("/task", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var task = JSON.parse(req.body.data);
    task.id = id;
    task.isDone = false;
    id++;

    tasks.push(task);
    res.json(task);
});

app.post("/task/:id/done", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //var task = JSON.parse(req.body.data);
    //task.id = id;
    //task.isDone = false;
    //id++;

    //tasks.push(task);
    console.log("hello request")
    res.json("response");
});

app.listen(3001);