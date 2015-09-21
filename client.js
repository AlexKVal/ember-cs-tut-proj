var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.ApplicationSerializer = DS.JSONSerializer.extend();

App.Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('boolean'),
  image: DS.attr('string')
});


App.Router.map(function() {
  this.route('about', {path: 'aboutus'}); // path '#/aboutus', route 'about'
  this.route('products', {path: 'items'}, function() {
    this.route('product', {path: ':product_id'});
  });
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('product');
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    var result = this.store.find('product', params.product_id);
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
