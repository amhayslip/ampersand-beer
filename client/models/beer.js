var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  props: {
    id: 'any',
    brewery: ['string', true, ''],
    beer: ['string', true, ''],
  },
  session: {
    selected: ['boolean', true, false]
  },
  derived: {
    beerName: {
      deps: ['brewery', 'beer'],
      fn: function () {
        return this.brewery + ' ' + this.beer;
      }
    },
    editUrl: {
      deps: ['id'],
      fn: function () {
        return '/beer/' + this.id + '/edit';
      }
    },
    viewUrl: {
      deps: ['id'],
      fn: function () {
        return '/beer/' + this.id;
      }
    }
  }
});
