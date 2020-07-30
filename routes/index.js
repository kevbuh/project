const express = require('express');
const router = express.Router();

//@desc Login/ Landing Page
// @route GET /
router.get('/', (req, res) => {
	res.render('dashboard');
});

router.get('/login', (req, res) => {
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

module.exports = router;
