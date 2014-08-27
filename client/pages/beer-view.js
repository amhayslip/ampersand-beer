/*global app, alert*/
var PageView = require('./base');
var templates = require('../templates');
var BeerForm = require('../forms/beer');


module.exports = PageView.extend({
  pageTitle: 'view beer',
  template: templates.pages.beerView,
  bindings: {
    'model.beerName': {
      role: 'name'
    },
    'model.editUrl': {
      type: 'attribute',
      role: 'edit',
      name: 'href'
    }
  },
  events: {
    'click [role=delete]': 'handleDeleteClick'
  },
  initialize: function (spec) {
    var self = this;
    app.beer.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
    });
  },
  handleDeleteClick: function () {
    this.model.destroy({success: function () {
      app.navigate('beers');
    }});
  }
});
