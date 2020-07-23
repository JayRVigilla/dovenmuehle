const express = require('express');
const router = new express.Router();
const BackendData = require('./BackendData.js');

const server = new BackendData();

/**  GET /data
 * => {strings:[newestString, ... , oldestString]} */

router.get('/', async (req, res, next) => {
  try {
    const strings = server.fetch();
    return res.status(200).json({ strings });
  } catch (err) {
    return next(err);
  }
});

/**  POST /data
 *
 * { clientString }
 * => {strings:[clientString, ... , oldestString]} */

router.post('/', (req, res, next) => {
  try {
    const prepended = server.post(req.body.string);
    return res.status(201).send({ prepended });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
