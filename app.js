
const express = require('express');
const morgan = require('morgan');
const serverless = require('serverless-http');

const port = process.env.PORT || 3000;

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
    res.send('name is love')
});



app.use('/', router);





app.listen(port, () => {
console.log('listening at port')
})




// module.exports = app;
// module.exports.handler = serverless(app);