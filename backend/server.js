// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

// Configuration
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/familyapps',
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Model
var Family = mongoose.model('Family', {
  name: String,
  dob: String,
  image: String,
  link: String
});

// Get all member items
app.get('/api/familyapps', function(req, res) {
  console.log('Listing member items...');

  //use mongoose to get all members in the database
  Family.find(function(err, familyapps) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) {
      res.send(err);
    }

    res.json(familyapps); // return all members in JSON format
  });
});

// Create a member Item
app.post('/api/familyapps', function(req, res) {
  console.log('Creating member item...');

  Family.create(
    {
      name: req.body.name,
      dob: req.body.dob,
      image: req.body.image,
      link: req.body.link,
      done: false
    },
    function(err, familyapps) {
      if (err) {
        res.send(err);
      }

      // create and return all the members
      Family.find(function(err, familyapps) {
        if (err) res.send(err);
        res.json(familyapps);
      });
    }
  );
});

// Update a member Item
app.put('/api/familyapps/:id', function(req, res) {
  const family = {
    name: req.body.name,
    dob: req.body.dob,
    image: req.body.image,
    link: req.body.link
  };
  console.log('Updating item - ', req.params.id);
  Family.update({ _id: req.params.id }, family, function(err, raw) {
    if (err) {
      res.send(err);
    }
    res.send(raw);
  });
});

// Delete a member Item
app.delete('/api/familyapps/:id', function(req, res) {
  Family.remove(
    {
      _id: req.params.id
    },
    function(err, family) {
      if (err) {
        console.error('Error deleting member ', err);
      } else {
        Family.find(function(err, familyapps) {
          if (err) {
            res.send(err);
          } else {
            res.json(familyapps);
          }
        });
      }
    }
  );
});

// Start app and listen on port 8080
app.listen(process.env.PORT || 8080);
console.log('Family server listening on port  - ', process.env.PORT || 8100);
