const express = require('express');
const router = new express.Router();
const BackendData = require('./BackendData.js');

const server = new BackendData();

/**  GET /data
 * => {data:[newestString, ... , oldestString]} */

router.get('/', async (req, res, next) => {
  try {
    const response = server.fetch();
    return res.status(200).json({ response });
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
    const result = server.post(req.body.string);
    return res.status(201).send({ message: 'String prepended', result });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
