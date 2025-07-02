const catService = require('../services/cat.service');

test('debería obtener razas de gatos', async () => {
  const result = await catService.getAllBreeds();
  expect(Array.isArray(result)).toBe(true);
});