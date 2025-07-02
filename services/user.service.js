const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.registerUser = async ({ username, password,telefono,correo,imagen }) => {
  const existing = await User.findOne({ username });
  if (existing) return { error: 'Usuario ya existe' };

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashed,telefono,correo,imagen });
  await user.save();
  return { message: 'Usuario registrado con éxito' };
};

exports.loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) return { error: 'Usuario no encontrado' };

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return { error: 'Contraseña incorrecta' };

  return { message: 'Login exitoso', user: { username: user.username,imagen: user.Imagen } };
};

exports.getUserByUsername = async (username) => {
  return await User.findOne({ username }).select('-password');
};

