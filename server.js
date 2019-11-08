// Set Handlebars.

const express = require('express')
const app = express()
const port = 3000
var exphbs = require("express-handlebars");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/articlesController.js");

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}`))