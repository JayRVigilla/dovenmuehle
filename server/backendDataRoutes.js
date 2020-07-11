const express = require('express');
const router = new express.Router();
const BackendData = require('./BackendData.js');

/**  GET /data
 * => {data:[newestString, ... , oldestString]} */

router.get('/', async (req, res, next) => {
  try {
    const response = BackendData.get();
    return res.json({ response });
  } catch (err) {
    return next(err);
  }
});

/**  POST /data
 *
 * { clientString }
 * => {data:[clientString, ... , oldestString]} */

router.post('/', (req, res, next) => {
  try {
    BackendData.post(req.body.string);
    return res.status(201).send({ message: 'String prepended' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
