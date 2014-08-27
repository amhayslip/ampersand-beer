var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');
var ExtendedInput = InputView.extend({
	template: templates.includes.formInput()
});

module.exports = FormView.extend({
	fields: function () {
		return [
		new ExtendedInput({
			label: 'Brewery',
			name: 'brewery',
			value: this.model && this.model.brewery,
			placeholder: 'Brewery',
			parent: this
		}),
		new ExtendedInput({
			label: 'Beer',
			name: 'beer',
			value: this.model && this.model.beer,
			placeholder: 'Beer',
			parent: this
		})
		];
	}
});
