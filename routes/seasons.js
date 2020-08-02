const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//@desc Login/ Landing Page
// @route GET /
router.get('/', (req, res) => {
	res.render('seasons');
});

router.get('/spring', (req, res) => {
	res.render('spring');
});

router.get('/summer', (req, res) => {
	res.render('summer');
});

router.get('/fall', (req, res) => {
	res.render('fall');
});

router.get('/winter', (req, res) => {
	res.render('winter');
});

module.exports = router;
