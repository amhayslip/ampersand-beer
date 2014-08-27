/*global app*/
var PageView = require('./base');
var templates = require('../templates');
var PersonForm = require('../forms/beer');


module.exports = PageView.extend({
  pageTitle: 'add beer',
  template: templates.pages.beerAdd,
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new PersonForm({
          el: el,
          submitCallback: function (data) {
            app.beer.create(data, {
              wait: true,
              success: function () {
                app.navigate('/beers');
                app.beer.fetch();
              }
            });
          }
        });
      }
    }
  }
});
