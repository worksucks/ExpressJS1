var express = require('express');
var app = express();


var fs = require('fs');
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    res.send(test.json);
});

fs.readfile('/test.json', 'utf8', function(err,data){
  if (err) throw err;
  stringifyFile = data;
  res.send(data)
});

app.post('updateNote/:note', function(req,res){
  res.send(req.params.note);
});

fs.writefile('/test.json', stringifyFile, function(err){
  if (err) throw err;
  console.log('file updated');
})

app.listen(3000);
