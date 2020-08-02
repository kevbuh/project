const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//@desc Login/ Landing Page
// @route GET /
router.get('/', (req, res) => {
	res.render('categories');
});

router.get('/upandcoming', (req, res) => {
	res.render('upandcoming');
});

router.get('/jackets', (req, res) => {
	res.render('jackets');
});

router.get('/tshirts', (req, res) => {
	res.render('tshirts');
});

router.get('/bottoms', (req, res) => {
	res.render('bottoms');
});

router.get('/sweaters', (req, res) => {
	res.render('sweaters');
});

module.exports = router;
