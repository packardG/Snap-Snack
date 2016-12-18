var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Set up handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req,res) {
	res.sendFile('views/welcome.html', {root:__dirname});
});

app.get('/home', function(req,res) {
	res.render('home', {
		t1: "What's on the menu today?",
		t2: "Log in, or sign up to save your favorites!",
	});
});

app.get('/favorites', function(req,res) {
	res.render('favorites', {
		t1: "Your Favorite Recipes",
		t2: "All in one place!",
	});
});

app.get('/myRecipes', function(req,res) {
	res.render('myRecipes', {
		t1: "Recipes You've Added",
		t2: "A list of your best work!",
	});
});

app.get('/myIngredients', function(req,res) {
	res.render('myIngredients', {
		t1: "Your Ingredients",
		t2: "Here's what we're working with!",
	});
});

app.get('/home-trending', function(req,res) {
	res.render('home-trending', {
		t1: "What's on the menu today?",
		t2: "Log in, or sign up to save your favorites!",
	});
});

app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});
