import express from 'express';
import { paginaDetalleViaje, 
         paginaInicio, 
         paginaNosotros, 
         paginaTestimoniales, 
         paginaViajes 
        } from '../controllers/paginasControllers.js';

import { guardarTestimonial } from '../controllers/testimonialesControllers.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;