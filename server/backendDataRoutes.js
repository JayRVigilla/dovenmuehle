const express = require('express');
const router = new express.Router();
const BackendData = require('./BackendData.js');

const server = new BackendData();

/**  GET /data
 * => {strings:[newestString, ... , oldestString]} */

router.get('/', async (req, res, next) => {
  try {
    console.log('GET call made');
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
    console.log('POST call made');
    server.post(req.body.string);
    return res.status(201).send({ message: 'String prepended' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
