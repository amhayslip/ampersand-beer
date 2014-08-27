/*global me, app*/
var Router = require('ampersand-router');
var HomePage = require('./pages/home');

var CollectionDemo = require('./pages/collection-demo');
var Beers = require('./pages/beers');

var InfoPage = require('./pages/info');

var PersonAddPage = require('./pages/person-add');
var PersonEditPage = require('./pages/person-edit');
var PersonViewPage = require('./pages/person-view');

var BeerAddPage = require('./pages/beer-add');
var BeerEditPage = require('./pages/beer-edit');
var BeerViewPage = require('./pages/beer-view');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'beers': 'beers',
        'info': 'info',
        'person/add': 'personAdd',
        'person/:id': 'personView',
        'person/:id/edit': 'personEdit',
        'beer/add': 'beerAdd',
        'beer/:id': 'beerView',
        'beer/:id/edit': 'beerEdit',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        this.trigger('page', new HomePage({
            model: me
        }));
    },

    collectionDemo: function () {
        this.trigger('page', new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    beers: function () {
        this.trigger('page', new Beers({
            model: me,
            collection: app.beer
        }));
    },

    info: function () {
        this.trigger('page', new InfoPage({
            model: me
        }));
    },

    beerAdd: function () {
        this.trigger('page', new BeerAddPage());
    },

    beerEdit: function (id) {
        this.trigger('page', new BeerEditPage({
            id: id
        }));
    },

    beerView: function (id) {
        this.trigger('page', new BeerViewPage({
            id: id
        }));
    },

    personAdd: function () {
        this.trigger('page', new PersonAddPage());
    },

    personEdit: function (id) {
        this.trigger('page', new PersonEditPage({
            id: id
        }));
    },

    personView: function (id) {
        this.trigger('page', new PersonViewPage({
            id: id
        }));
    },

    catchAll: function () {
        this.redirectTo('');
    }
});
