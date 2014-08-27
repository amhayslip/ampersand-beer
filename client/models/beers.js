// beer Collection - beers.js
var Collection = require('ampersand-rest-collection');
var beer = require('./beer');


module.exports = Collection.extend({
  model: beer,
  url: '/beerApi/beers'
});


