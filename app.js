const express = require('express');
const cors = require('cors');


const app = express();
const catRoutes = require('./routes/cat.routes');
const imageRoutes = require('./routes/image.routes');
const userRoutes = require('./routes/user.routes');
app.use(cors());
app.use(express.json());

app.use('/api/cats', catRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/users', userRoutes);

module.exports = app;