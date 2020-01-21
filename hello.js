var express= require('express')
var http=require('http');
const bodyParser = require('body-parser');
const mongoose= require('mongoose')
const app = express();

app.use(bodyParser.json({ limit: '500mb' }));

app.use(bodyParser.urlencoded({ extended: false }));
// var server=http.createServer((function(request,response)
// {
// 	response.writeHead(200,
// 	{"Content-Type" : "text/plain"});
// 	response.end("server created\n");
//
// }));

const UserRoutes= require('./routes/user');

app.use('/api/users', UserRoutes)
mongoose.connect('mongodb://localhost:27017/')
    .then(result => {
      app.listen(7000);
      console.log(`Server is running on http://localhost:7000`);
    })
    .catch(err => console.log(err));
console.log('server running')
