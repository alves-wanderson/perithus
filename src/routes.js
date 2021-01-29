import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/uploads';

import SessionController from './controllers/SessionController';
import CarController from './controllers/CarController';
import DashboardController from './controllers/DashboardController';
import RentController from './controllers/RentController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/cars', upload.single('thumbnail'), CarController.store);
routes.get('/cars', CarController.index);
routes.put('/cars/:car_id', upload.single('thumbnail'), CarController.update);
routes.delete('/cars', CarController.destroy);

routes.get('/dashboard', DashboardController.show);

routes.post('/cars/:car_id/rent', RentController.store);


export default routes;