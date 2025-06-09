import { obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes, buscarSuperHeroePorAtributo, obtenerSuperHeroesMayoresA100 } from '../services/superHeroService.mjs';

import { renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';

export async function obtenerSuperHeroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperHeroePorId(id);
        if(!superheroe) {
            return res.status(404).send({mensaje: 'Superheroe no encontrado.' });
        }

        const superHeroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superHeroeFormateado);
    } catch(error) {
        res.status(500).send({ mensaje: 'Error al obtener el superheroe.', error: error.mensaje });
    }
    
}

export async function obtenerTodosLosSuperHeroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes();

        const superHeroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superHeroesFormateados);
    } catch(error) {
         res.status(500).send({ mensaje: 'Error al obtener los superheroes.', error: error.mensaje });
    }
    
}

export async function buscarSuperHeroePorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperHeroePorAtributo(atributo, valor);

        if(superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes con ese atributo'});
        }

        const superHeroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superHeroesFormateados);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superheroes', error: error.mensaje });
    }
    
}

export async function obtenerSuperHeroesMayoresA100Controller(req, res) {
    try {
        const superheroes = await obtenerSuperHeroesMayoresA100();
        if(superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes mayores a 30 años' });
        }

        const superHeroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superHeroesFormateados);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superheroes mayores a 30', error: error.mensaje });
    }
    
}