const express = require('express');
const router = new express.Router();
let id;
let numeros;
let nombre;


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Kev-Eats' });
});

const newTab = [];
const tabCmd = [new Command(1, 10, 15, 2), ];

function Command(id, numero, date, heure, repas) {
  this.id = id;
  this.numero = numero;
  this.date = date;
  this.heure = heure;
  this.repas = repas;
}
router.post('/confir', (req, res, next) => {
  id = req.body.item;
  res.render('form', {
      liste: req.body.item,
      title: 'commandez Chez',
  });
});

/* vue sur internet*/
router.post(
  '/infoscomand',
  (req, res, next) => {
      const date = new Date();
      const dateA = date.getDate() + "/restaurant" + date.getMonth() + "/restaurant" + date.getFullYear();
      const HeureA = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      const commandNew = new Command(id, numeros++, dateA, HeureA, nombre);
      tabCmd.push(commandNew);
      res.redirect('/restaurant');
  }
);

router.post('/infosComand1/list', function(req, res, next) {
  let a = 0;
  for (let i = 0; i < tabCmd.length; i++)
      if (tabCmd[i].id === req.body.restaurant) {
          newTab[a] = tabCmd[i];
          a++;
      }
  const length = newTab.length;
  newTab.sort();
  res.render('workersOrder', {
      tabCmd,
      title: 'les repas a préparer',
      newTabs: newTab,
      longueur: length,
  });
});

/* Page recherché pour Employé  */

router.get('/resto/search', function (req, res, next) {
  res.render('workersOrder.ejs', { title: ""});
});


router.get('/resto', (req, res, next) => {
  res.render('workersOrder', { title: "" });
});
/* page pour employés*/

router.get('/work', function (req, res, next)  {
  res.render('workers.ejs', { title: "Employé Veuillez choisir votre Restaurant"});
});

/*  connectionlivreur*/
router.get('/livraison', (req, res, next) => {
  res.render('deliveryManConnection', { title: "Page Pour livreur"});
});

/* renvoie aux restaurants ayant des commands pretes*/
router.get('/livraison1', (req, res, next) => {
  res.render('deliveryOrder', { title: "Page Pour livreur"});
});

/* page du manager*/
router.get('/Manager', (req, res, next) => {
  res.render('ManagerSiteOrder', { title: "Page Pour Gestionnaire"});
});

module.exports = router;



