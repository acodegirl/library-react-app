//Due to data integrity returning very generic error.
module.exports = function(err, req, res, next) {
  res.status(500).send('Something failed.');
};
