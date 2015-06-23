var routes = require('require-directory')(module);

module.exports = function(app) {
  Object.keys(routes).forEach(function(key) {
    if (key !== 'index') {
      app.use('/' + key, routes[key]);
    }
  });

  app.get('/', function(req, res) {
    res.json({ 'Taipei Road Construction Analytics System Version': '1.0' });
  });

};