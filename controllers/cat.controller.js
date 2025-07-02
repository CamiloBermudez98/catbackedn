const catService = require('../services/cat.service');

exports.getBreeds = async (req, respuesta) => {
  const result = await catService.getBreedsList();
  respuesta.json(result);
};

exports.getBreedById = async (Data, respuesta) => {
  const result = await catService.getBreedById(Data.params.breed_id);
  respuesta.json(result);
};

exports.searchBreeds = async (Data, respuesta) => {
  const result = await catService.searchBreeds(Data.query.q);
  respuesta.json(result);
};
