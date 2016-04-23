var url = require('url');
var path = require('path');

module.exports = function (generateId) {
  return function (req, res, next) {
    Promise.all([ generateId() ])
      .then(function (results) {
        var parsedUrl = url.parse(req.url);
        parsedUrl.pathname = path.join(parsedUrl.pathname, results[0]);
        res.redirect(url.format(parsedUrl));
      })
      .catch(function (err) {
        next(err);
      });
  };
};
