const express = require('express');
const router = new express.Router();
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
 class Formulaire {
  constructor(Name,NumberofMeals,Street,HomeNumber,BoxNumber,PostalCode,Commune) {
    this.Name = Name;
    this.NumberofMeals = NumberofMeals;
    this.Street = Street;
    this.HomeNumber = HomeNumber;
    this.BoxNumber = BoxNumber;
    this.PostalCode = PostalCode;
    this.Commune = Commune;
  }
}

const formulaires = [];

 router.get('/', (req, res, next) => {
  res.render('confirm', { title: "confirmation commande" });
});

router.post(
  '/',
  [
   body('Name').trim(),
   body('NumberofMeals').trim().isInt({min:1, max:20}).toInt(),
   body('Street').trim(),
   body('HomeNumber').optional({checkFalsy: false}).trim(),
   body('BoxNumber').optional({checkFalsy: false}).trim(),
   body('PostalCode').trim().isNumeric(),
   body('Commune').trim()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400));
    };
    const  Name = req.body.Name;
    const  NumberofMeals = req.body.NumberofMeals;
    const  Street = req.body.Street;
    const  HomeNumber = req.body.HomeNumber;
    const  BoxNumber = req.body.BoxNumber;
    const  PostalCode = req.body.PostalCode;
    const  Commune = req.body.Commune;
    const newFormulaire = new Formulaire(Name,NumberofMeals,Street,HomeNumber,BoxNumber,PostalCode,Commune);
    formulaires.push(newFormulaire);
    console.log(formulaires);
    res.render('confirm',{
      title: "Bien vouloir vérifiez les Données Saisie",
        Name: req.body.Name,
        NumberofMeals: req.body.NumberofMeals,
        Street: req.body.Street,
        HomeNumber: req.body.HomeNumber,
        BoxNumber: req.body.BoxNumber,
        PostalCode: req.body.PostalCode,
        Commune: req.body.Commune,
    });
  }
);

module.exports = router;
