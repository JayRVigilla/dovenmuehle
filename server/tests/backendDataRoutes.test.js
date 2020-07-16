/**
 * @jest-environment node
 */
const { request } = require('express');
const app = require('../index');

describe('backendDataRoutes test', async () => {
  test('can get array of strings', async () => {
    const response = await request(app).get();

    expect(response.body).toEqual({
      response: ['test'],
    });
    expect(response.status).toEqual(200);
  });

  test('prepend to array of strings', async () => {
    const response = await request(app).post('inputString');

    expect(response.body).toEqual({
      message: ['String prepended'],
      result: ['inputString', 'test'],
    });
    expect(response.status).toEqual(201);
  });
});
