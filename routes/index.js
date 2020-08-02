const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//@desc Login/ Landing Page
// @route GET /
router.get('/', (req, res) => {
	res.render('dashboard');
});

router.get('/login', ensureGuest, (req, res) => {
	res.render('login');
});

//@desc dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
	res.render('dashboard');
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/mens', (req, res) => {
	res.render('mens');
});

router.get('/womens', (req, res) => {
	res.render('womens');
});

router.get('/news', (req, res) => {
	res.render('news');
});

router.get('/search', (req, res) => {
	res.render('search');
});

router.get('/signup', (req, res) => {
	res.render('signup');
});

router.get('/streetwear', (req, res) => {
	res.render('streetwear');
});

router.get('/swim', (req, res) => {
	res.render('swim');
});

router.get('/outdoors', (req, res) => {
	res.render('outdoors');
});

router.get('/account', ensureAuth, (req, res) => {
	res.render('account', {
		name: req.user.firstName,
	});
});

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = router;
