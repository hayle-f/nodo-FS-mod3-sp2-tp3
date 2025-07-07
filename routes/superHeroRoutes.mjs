import express from 'express';
import { obtenerSuperHeroePorIdController, obtenerTodosLosSuperHeroesController, buscarSuperHeroePorAtributoController, obtenerSuperHeroesMayoresA40Controller} from '../controllers/superheroesController.mjs'

const router = express.Router();

router.get('/heroes/mayores-40', obtenerSuperHeroesMayoresA40Controller);
router.get('/heroes/atributo/:atributo/:valor', buscarSuperHeroePorAtributoController);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes', obtenerTodosLosSuperHeroesController);

export default router;

