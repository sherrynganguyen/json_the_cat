const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, description) => {
      assert.equal(error, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedDesc, description);
      done();
    });
  });
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Pikachu', (error, description) => {
      assert.equal(error, undefined);
      const expectedDesc = "The breed name is not found";
      assert.equal(expectedDesc, description);
      done();
    });
  });
});