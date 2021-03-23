/* const express = require('express');
const router = new express.Router();
const { body, validationResult } = require('express-validator');
const createError = require('http-errors');


class delivery {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
}

const Delivery = [];

function requireAcceptsJson(req, res, next) {
  if (req.accepts('json')) {
    next();
  } else {
    next(createError(406));
  }
}

router.all('*', requireAcceptsJson);

router.get('/', (req, res, next) => {
  res.json({delivery});
});



router.post(
  '/',
  [
    body('lastName').escape(),
    body('firstName').escape(),
  ],
(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(createError(400));
  } else {
    const delivery = new Delivery(req.body.lastName,req.body.firstName);
    delivery.push(delivery);
  }
});

module.exports = router; */
