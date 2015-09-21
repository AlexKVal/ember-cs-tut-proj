var express = require('express');

var app = express();


var products = [
  { id: 1,
    title: 'Kingling',
    price: 249,
    description: 'Easily...',
    isOnSale: false,
    image: 'kindling.png'
  },
  { id: 2,
    title: 'Flint',
    price: 99,
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    isOnSale: true,
    image: 'flint.png'
  },
  { id: 3,
    title: 'Third',
    price: 333,
    description: 'This is the third`s description.',
    isOnSale: true,
    image: 'third.png'
  }
];

app.get('/products', function(req, res) {
  res.json(products);
})

app.use('/', express.static(__dirname));

app.listen(8000);
