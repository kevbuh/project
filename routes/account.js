const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//@desc Login/ Landing Page
// @route GET /
router.get('/account', ensureAuth, (req, res) => {
	res.render('account');
});

router.get('/security', ensureAuth, (req, res) => {
	res.render('security');
});

router.get('/shop', ensureAuth, (req, res) => {
	res.render('shop');
});

router.get('/info', ensureAuth, (req, res) => {
	res.render('info');
});

router.get('/following', ensureAuth, (req, res) => {
	res.render('following');
});

router.get('/orders', ensureAuth, (req, res) => {
	res.render('orders');
});

router.get('/settings', ensureAuth, (req, res) => {
	res.render('settings');
});

module.exports = router;
