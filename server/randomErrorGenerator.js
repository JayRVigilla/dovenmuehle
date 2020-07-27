/**
 * randomErrorGenerator
 *
 * Allows us to mock errors coming from our server and demonstrate how errors
 * are handled.
 *
 * uses Math.random() to generate a random number.
 *    If greater than .85 then throw an error.
 */
function randomErrorGenerator() {
  const err = new Error('Mocked error from backend');
  const draw = Math.random();
  if (draw > 0.85) throw err;
}

module.exports = randomErrorGenerator;
