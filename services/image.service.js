const axios = require('axios');
const baseURL = 'https://api.thecatapi.com/v1';
const headers = { 'x-api-key': process.env.API_KEY };

exports.getImagesByBreedId = async (breedId) => {
  const res = await axios.get(`${baseURL}/images/search?breed_ids=${breedId}&limit=5`, {
    headers
  });
  return res.data;
};