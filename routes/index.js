const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// added async...
router.use(async (req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;