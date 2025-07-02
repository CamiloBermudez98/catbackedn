const userService = require('../services/user.service');

exports.register = async (req, respuesta) => {
  const result = await userService.registerUser(req.body);
  respuesta.json(result);
};

exports.login = async (req, respuesta) => {
  const result = await userService.loginUser(req.body);
  respuesta.json(result);
};

exports.getUserInfo = async (req, result) => {
  const { username } = req.params;

  try {
    const user = await userService.getUserByUsername(username); 
    if (!user) return result.status(404).json({ error: 'Usuario no encontrado' });

    result.json({ user });
  } catch (err) {
    result.status(500).json({ error: 'Error al obtener información del usuario' });
  }
};