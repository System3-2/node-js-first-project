function authorize(req, res, next) {
  const { user } = req.query;

  if (user) {
    req.user = { name: 'oloja', id: 4 };
    next();
  }
  else {
    res.status(401).send('unauthorized');
  }
}

module.exports = authorize;