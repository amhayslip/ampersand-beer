var _ = require('underscore');


var beers = [
{
  id: 1,
  brewery: 'Dogfish Head',
  beer: '120 Minute Ipa'
},
{
  id: 2,
  brewery: '512',
  beer: 'IPA'
}
];
var id = 3;

function get(id) {
  return _.findWhere(beers, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
  res.send(beers);
};

exports.add = function (req, res) {
  var beer = req.body;
  beer.id = id++;
  beers.push(beer);
  res.status(201).send(beer);
};

exports.get = function (req, res) {
  var found = get(req.params.id);
  res.status(found ? 200 : 404);
  res.send(found);
};

exports.delete = function (req, res) {
  var found = get(req.params.id);
  if (found) beers = _.without(beers, found);
  res.status(found ? 200 : 404);
  res.send(found);
};

exports.update = function (req, res) {
  var found = get(req.params.id);
  if (found) _.extend(found, req.body);
  res.status(found ? 200 : 404);
  res.send(found);
};