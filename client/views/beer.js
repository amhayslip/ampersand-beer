var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
  template: templates.includes.beer,
  bindings: {
    'model.beerName': '[role=name]',
    'model.editUrl': {
      type: 'attribute',
      role: 'action-edit',
      name: 'href'
    },
    'model.viewUrl': {
      type: 'attribute',
      role: 'name',
      name: 'href'
    }
  },
  events: {
    'click [role=action-delete]': 'handleRemoveClick'
  },
  handleRemoveClick: function () {
    this.model.destroy();
    return false;
  }
});
