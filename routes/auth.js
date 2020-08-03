const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with Google
// @route GET /auth/google
router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile'],
	})
);

// @desc Google auth callback
// @route GET /auth/google/callback
router.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: '/login',
	}),
	(req, res) => {
		res.redirect('/account');
	}
);

router.get(
	'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Fenigmatic-ocean-61732.herokuapp.com%2Fauth%2Fgoogle%2Fcallback&scope=profile&client_id=202343364934-hbd445gggs5h5jti06v95a4mrcqc21rg.apps.googleusercontent.com&flowName=GeneralOAuthFlow',
	passport.authenticate('google', {
		failureRedirect: '/login',
	}),
	(req, res) => {
		res.redirect('/account');
	}
);

// @desc Logout user
// @route /auth/logout
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

module.exports = router;
