const express = require('express');
const router = new express.Router();
const createError = require('http-errors');

function Restaurant(Name, Meals){
  this.Name = Name;
  this.Meals = Meals;
}

const Restaurant1  = new Restaurant("Wolf", "Saumon d’Ecosse grillé (sauce béarnaise, épinards en branches)");
const Restaurant2  = new Restaurant("Fin de Siècle","Jambonneau à l’ancienne (800gr) sauce moutarde");
const Restaurant3  = new Restaurant("Makisu","Plateau de fruits de mer");

const listRestaurant = [Restaurant1, Restaurant2, Restaurant3];

function requireAcceptsJson(req, res, next) {
  if (req.accepts('json')) {
      next();
  } else {
      next(createError(406));
  }
}

router.all('*', requireAcceptsJson);

/* page des restaurants trouvé*/
router.get('/', function (req, res, next){

  const length = listRestaurant.length;
  res.render('website',{
   title : "",
   message : "" ,
   listeRestaurant : listRestaurant,
   longueur : length,
   liste: listRestaurant.restaurant,
  })
});


module.exports = router, listRestaurant;
