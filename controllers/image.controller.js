const imageService =  require('../services/image.service');

exports.getImagesByBreedId = async (req, respuesta) => {
  const { breed_id } = req.query;
  if (!breed_id) {
    return respuesta.status(400).json({ error: "breed_id es obligatorio" });
  }
  const result = await imageService.getImagesByBreedId(breed_id);
  respuesta.json(result);
};