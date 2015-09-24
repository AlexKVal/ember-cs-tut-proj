var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.ApplicationSerializer = DS.JSONSerializer.extend();

App.Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('boolean'),
  image: DS.attr('string'),
  reviews: DS.hasMany('review', {async: true})
});

App.Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date')
});

App.Router.map(function() {
  this.route('about', {path: 'aboutus'}); // path '#/aboutus', route 'about'
  this.route('products', {path: 'items'}, function() {
    this.route('product', {path: ':product_id'});
    this.route('onsale');
  });
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    // return this.store.findAll('product');
    return this.store.query('product', { order: 'title' });
  }
});

// this is the default behavior
// App.ProductRoute = Ember.Route.extend({
//   model: function(params) {
//     var result = this.store.find('product', params.product_id);
//     console.log(result);
//     return result;
//   }
// });

App.ProductsOnsaleRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('products').filterBy('isOnSale');
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('product');
  }
});
