//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');


const express = require('express');
const filmsRouter = new express.Router();


//index
filmsRouter.get('/', function(req, res){
  res.json({data: films});
});

//create
filmsRouter.post('/', function(req, res){
  films.push(req.body.film);
    res.json({data: films});
});

//show
filmsRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]});
});

//update
filmsRouter.put('/:id', function(req, res){
  films[req.params.id] = req.bdy.film;
  res.json({data: films});
});

//destroy
filmsRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmsRouter;
