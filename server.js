var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var content = {
    title : 'Article one',
    date:'sep28,2016',
    content:
        
        `<p>
                This was created by myself    This was created by myself
                This was created by myself     This was created by myself
            </p>
    
        
            <p>
                This was created by myself   This was created by myself
                This was created by myself    This was created by myself
            </p>
    
    
    '
              };

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/art1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm.html'));
});

app.get('/art2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'm1.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`imad course app listening on port ${port}!`);
});
