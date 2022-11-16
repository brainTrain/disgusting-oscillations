module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader('content-type', 'text/html');
    next();
  });
};
