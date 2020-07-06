
const express = require('express');
const morgan = require('morgan');
const serverless = require('serverless-http');


// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

const router = express.Router();
// app.use(`/.netlify/functions/app`, router);


// routes
router.route('/')
  .get((req, res) => {
  res.render('index');
});

router.route('/project')
  .get((req, res) => {
  res.render('project')
})

router.route('/contact')
  .get((req, res) => {
  res.render('contact')
})

router.route('/tools')
.get((req, res) => {
  res.render('tools')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


app.use('/', router);





app.listen('3000', () => {
console.log('listening at port')
})




// module.exports = app;
// module.exports.handler = serverless(app);