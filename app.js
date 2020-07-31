const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//Load config
dotenv.config({ path: './config/config.env' });

//Passport Config
require('./config/passport')(passport);

connectDB();

const app = express();

// Morgan Logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// Sessions
app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/account', require('./routes/account'));
app.use('/categories', require('./routes/categories'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Running on port ${PORT}`));
