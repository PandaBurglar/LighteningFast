// load .env data into process.env
require("dotenv").config();
const path = require('path');

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
// const sassMiddleware = require('node-sass-middleware');
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require('cookie-session');

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
// app.use(cookieSession({ name: 'session', keys: [key1, key2] }));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
// app.use(sassMiddleware({
//   /* Options */
//   src: path.join(__dirname, '/styles'),
//   dest: path.join(__dirname, '/public/styles'),
//   debug: true,
//   outputStyle: 'compressed',
//   prefix:  '/styles'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
// }));
// console.log(path.join);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const checkoutRoutes = require('./routes/checkout');
const adminRoutes = require('./routes/admin');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use('/order', orderRoutes(db));
app.use('/checkout', checkoutRoutes(db));
//  app.use('/admin', adminRoutes);
app.use("/menu", menuRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/menu", (req, res) => {
//   res.render('menu');
// });

app.get('/order_status', (req, res) => {
  res.render('order_status')
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
