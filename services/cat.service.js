const axios = require('axios');
const URL = 'https://api.thecatapi.com/v1';
const headers = { 'x-api-key': process.env.API_KEY };

exports.getBreedsList  = async () => {
   let urlSerch = `${URL}/breeds`
  const respuesta = await axios.get(urlSerch, { headers });
  return respuesta.data;
};

exports.getBreedById = async (id) => {
  const respuesta  = await this.getBreedsList();
  return respuesta.find(elemento => elemento.id === id);
};

exports.searchBreeds = async (query) => {
  const allBreeds = await axios.get(`${URL}/breeds`, { headers });
  return allBreeds.data.filter(b => b.name.toLowerCase().includes(query.toLowerCase()) ||
    (b.temperament && b.temperament.toLowerCase().includes(query.toLowerCase())) ||
    (b.origin && b.origin.toLowerCase().includes(query.toLowerCase()))
  );
};
