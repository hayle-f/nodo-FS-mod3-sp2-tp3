import express from 'express';
import { obtenerSuperHeroePorIdController, obtenerTodosLosSuperHeroesController, buscarSuperHeroePorAtributoController, obtenerSuperHeroesMayoresA100Controller} from '../controllers/superheroesController.mjs'

const router = express.Router();

router.get('/heroes/mayores-100', obtenerSuperHeroesMayoresA100Controller);
router.get('/heroes/atributo/:atributo/:valor', buscarSuperHeroePorAtributoController);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes', obtenerTodosLosSuperHeroesController);

export default router;

