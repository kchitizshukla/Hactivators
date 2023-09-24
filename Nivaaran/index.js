var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://127.0.0.1:27017/usersdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', () => console.log("error in connecting to database"));
db.once('open', () => console.log("Connected to database"));

app.post("/signup", (req,res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var data = {
        "name": name,
        "email": email,
        "phno": phno,
        "password": password
    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err) {
            throw err;
        }
        console.log("Record Inserted");
    })
    return res.redirect('signup_success.html')
})

app.get("/", (req, res) =>{
    res.set({
        "Access-Control-Allow-Origin": '*'
    })
    return res.redirect(index.html);
}).listen(3000);

console.log("Listening on port 3000");