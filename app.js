var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000,() => {
  console.log('running on 3000');
})

app.use(function (req, res, next) {
  res.set('Cache-Control', 'no-cache, no-store');
  next();
});

app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.post('/echo', function (req, res) {
  res.set(req.headers)
  res.send(req.body);
});

app.all('/echo/param/:id', function (req, res) {
  res.json({
    param: req.params.id
  });
});

app.post('/echo/headers', function (req, res) {
  res.json(req.headers);
});

app.get('/echo/qs', function (req, res) {
  res.json(req.query);
});
