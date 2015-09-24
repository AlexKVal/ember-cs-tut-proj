var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var app = express();

var products = [
  { id: 1,
    title: 'Kingling',
    price: 249,
    description: 'Easily...',
    isOnSale: false,
    image: 'img/kindling.jpeg',
    reviews: [100,101]
  },
  { id: 2,
    title: 'Flint',
    price: 99,
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    isOnSale: true,
    image: 'img/flint.jpeg',
    reviews: []
  },
  { id: 3,
    title: 'Third',
    price: 333,
    description: 'This is the third`s description.',
    isOnSale: true,
    image: 'img/third.jpeg',
    reviews: []
  }
];
var productsLastId = 3;

var reviews = [
  {
    id: 100,
    product: 1,
    text: 'Started a fire in no time!'
  },
  {
    id: 101,
    product: 1,
    text: 'Not the brightest flame, but warm!'
  }
];
var reviewsLastId = 101;

app.get('/products', function(req, res) {
  var order = req.query.order;
  if (order) {
    res.json(_.sortBy(products, order));
  } else {
    res.json(products);
  }
})

app.get('/reviews', function(req, res) {
  res.json(reviews);
})

app.post('/reviews', bodyParser.json({ type: 'application/vnd.api+json' }), function(req, res) {
  var newReview = req.body;
  newReview.id = ++reviewsLastId;

  console.log('newReview:', newReview);
  reviews.push(newReview);

  // var product = _.find(products, 'id', +newReview.productId);
  var product = _.find(products, 'id', +newReview.product);
  product.reviews.push(newReview.id);
  console.log('product', product);

  res.status(201).json(newReview);
})

app.get('/reviews/:id', function(req, res) {
  res.json(_.find(reviews, 'id', +req.params.id));
})

app.use('/', express.static(__dirname));

app.listen(8000);
