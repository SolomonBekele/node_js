const express = require("express");
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");

const app = express();

// Set up Handlebars
app.engine('handlebars', exphbs.engine({
  handlebars: allowInsecurePrototypeAccess(handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send(`
    <h2>Welcome to Students Database!!</h2>
    <h3>Click here to get access to the <b><a href="/student/list">Database</a></b></h3>
  `);
});

app.set('views',path.join(__dirname,'/views/'))

app.engine('hbs',exphbs({
    handlebars:allowInsecurePrototypeAccess(handlebars),
    extname:'hbs',
    defaultLayout:'MainLayout',
    layoutsDir:__dirname+'/views/layouts'
}))
app.set('view engine','hbs')

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
