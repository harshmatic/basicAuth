var express = require('express')

var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.post('/verifyUser', function (req, res) {
    console.log(req.body)
      if(req.body.username.toLowerCase()=='admin' && req.body.password=="admin@123") {
        res.send({result:"0"});
      } else {
        res.send({result:"1"});
      }
      
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
