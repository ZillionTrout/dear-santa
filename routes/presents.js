const express = require('express');
const router = express.Router();
const Present = require('../models/present.model');

/* GET all presents */
router.get ("/", async (req,res,next) => {
  try {
      const presents = await Present.find({});
      res.render("presents", { presents });
  } catch (error) {
      next(error);
  }
})

/* GET search results */
/* ROUTE /presents/search */
router.get('/search', async function (req, res, next) {
  const { name } = req.query;
  try {
    const present = await Present.findOne({ name: name });
    res.render('search', { query: name, present: present });
  } catch (error) {
    next(error)
  }
});

/* GET form view */
/* ROUTE /presents/new */
router.get('/new', function (req, res, next) {
  res.render('newPresent');
});

/* POST get users present inputs */
/* ROUTE /presents/new */
router.post('/new', async function (req, res, next) {
  const { name, price, recipient, image, description } = req.body;
  try {
    const createdPresent = await Present.create({ name, price, recipient, image, description });
    res.redirect(`/presents/${createdPresent._id}`);
  } catch (error) {
    next(error)
  }
});

/* GET delete present */
/* ROUTE /presents/delete/:id */
router.get('/delete/:id', async function (req, res, next) {
  const { id } = req.params;
  try {
    await Present.findByIdAndDelete(id);
    res.redirect(`/presents`);
  } catch (error) {
    next(error)
  }
});

/* GET one present */
router.get ("/:presentId", async (req,res,next) => {
  const { presentId } = req.params;
  try {
    const present = await Present.findById(presentId);
    res.render("presentsDetails", { present });
  } catch (error) {
    next(error);
  }
})

module.exports = router;