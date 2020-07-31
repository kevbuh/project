const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//@desc Login/ Landing Page
// @route GET /
router.get('/account', ensureAuth, (req, res) => {
	res.render('account', {
		name: req.user.firstName,
	});
});

router.get('/security', ensureAuth, (req, res) => {
	res.render('security', {
		name: req.user.firstName,
	});
});

router.get('/shop', ensureAuth, (req, res) => {
	res.render('shop', {
		name: req.user.firstName,
	});
});

router.get('/info', ensureAuth, (req, res) => {
	res.render('info', {
		name: req.user.firstName,
	});
});

router.get('/following', ensureAuth, (req, res) => {
	res.render('following', {
		name: req.user.firstName,
	});
});

router.get('/orders', ensureAuth, (req, res) => {
	res.render('orders', {
		name: req.user.firstName,
	});
});

router.get('/settings', ensureAuth, (req, res) => {
	res.render('settings', {
		name: req.user.firstName,
	});
});

module.exports = router;
