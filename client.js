var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.PRODUCTS = [
  {
    title: 'Kingling',
    price: 249,
    description: 'Easily...',
    isOnSale: false,
    image: 'kindling.png'
  },
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    isOnSale: true,
    image: 'flint.png'
  }
];

App.Router.map(function() {
  this.route('about', {path: 'aboutus'}); // path '#/aboutus', route 'about'
  this.route('products', {path: 'items'}, function() {
    this.route('product', {path: ':title'});
  });
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    var result = App.PRODUCTS.findBy('title', params.title);
    console.log(result);
    return result;
  }
});

App.IndexController = Ember.Controller.extend({
  counter: function() {
    return +new Date();
  }.property(),
  src: '/image.jpg',
  alt: 'This is the image'
});
