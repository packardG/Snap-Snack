var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req,res) {
	res.sendFile('public/views/welcome.html', {root:__dirname});
});

app.get('/home', function(req,res) {
	res.sendFile('public/views/home.html', {root:__dirname});
});

app.get('/favorites', function(req,res) {
	res.sendFile('public/views/favorites.html', {root:__dirname});
});

app.get('/myRecipes', function(req,res) {
	res.sendFile('public/views/myRecipes.html', {root:__dirname});
});

app.get('/myIngredients', function(req,res) {
	res.sendFile('public/views/myIngredients.html', {root:__dirname});
});

app.get('/home-trending', function(req,res) {
	res.sendFile('public/views/home-trending.html', {root:__dirname});
});

app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});
