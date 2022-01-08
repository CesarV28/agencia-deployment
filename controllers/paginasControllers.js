import { Viaje } from "../models/Viaje.js"
import { Testimonial } from '../models/Testimoniales.js'


const paginaInicio = async ( req, res ) => {

    // consultar 3 viajes del modelos

    const promiseDB = [
        Viaje.findAll({ limit: 3 }),
        Testimonial.findAll({ limit: 3 }),
    ];

    try {

       const [viajes, testimoniales] = await Promise.all( promiseDB );

        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }

    
};

const paginaNosotros = ( req, res ) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async ( req, res ) => {

    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    });
};

const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where:  { slug }  });

        res.render('viaje', {
            pagina: 'Informacion viaje',
            viaje
        });

    } catch (error) {
        console.log(error);
    }
};

const paginaTestimoniales = async ( req, res ) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
};