const express = require('express');
const router = new express.Router();
const BackendData = require('./BackendData.js');

/**  GET /data
 * => {data:[newestString, ... , oldestString]} */

router.get('/', async (req, res, next) => {
  try {
    const response = await BackendData.get();
    return res.json({ response });
  } catch (err) {
    return next(err);
  }
});

/**  POST /data
 *
 * { clientString }
 * => {data:[clientString, ... , oldestString]} */

router.post('/', async (req, res, next) => {
  try {
    const response = await BackendData.post(req.body);
    return res.status(201).json({ response });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
