const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash');
const app = express();

// Settings
app.set('port',process.env.PORT || 3001)

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(flash());

//
//Router
app.use(require('./routes/index'))

//variables globales
app.use((req, res, next) => {
  app.locals.login_usuario = req.flash('login_usuario')
  next();
});

//publico
app.use(express.static(path.join(__dirname,'public')))

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})


