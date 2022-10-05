const { Router } = require('express');
const userRouter = require('./userRoutes');
const eventRouter = require('./eventRoutes');

const routes = Router();

routes.use('/usuarios', userRouter);
routes.use('/evento', eventRouter);

module.exports = routes;