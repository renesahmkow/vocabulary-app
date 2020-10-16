const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const PORT = process.env.PORT || 5000;

// cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header(
    'Access-Control-Allow-Origin',
    'https://https://vocabulina.netlify.app/'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());

// import Routes
const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);

//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Connect to DB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

console.log(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (err) => {
  console.log(err);
});
db.once('open', () => {
  console.log('connect to database!!');
});

app.use(express.json());
app.use(cors());

app.listen(PORT);
