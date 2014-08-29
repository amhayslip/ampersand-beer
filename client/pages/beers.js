var PageView = require('./base');
var templates = require('../templates');
var BeerView = require('../views/beer');


module.exports = PageView.extend({
  pageTitle: 'Beers',
  template: templates.pages.beers,
  events: {
    'click [role=shuffle]': 'shuffle',
    'click [role=fetch]': 'fetchCollection',
    'click [role=reset]': 'resetCollection',
    'click [role=add]': 'addRandom'
  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, BeerView, this.getByRole('beer-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
  resetCollection: function () {
    this.collection.reset();
  },
  shuffle: function () {
    this.collection.comparator = function () {
      return !Math.round(Math.random());
    };
    this.collection.sort();
    delete this.collection.comparator;
    return false;
  },
  addRandom: function () {
    function getRandom(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
  }
});