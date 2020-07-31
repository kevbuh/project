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

module.exports = router;
