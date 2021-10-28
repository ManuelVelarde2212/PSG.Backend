import { Router } from "express";

import {addDocente, addDocentes,getTutorById, deleteDocenteById, getDocenteById, getDocentes, updateDocenteById,getTutores, loginDocente, loginCoordinador,getCoordinador} from '../controllers/Docentes.crontrollers'
//DOCENTES ROUTES
//importamos la funcion router para el enrutado
const router=Router();
//funcion para obtener todos los docente
router.get('/docentes',getDocentes);
//funcion para obtener una docente por id 
router.get('/docentes/:id',getDocenteById);
//funcion para agregar un docente nuevo
router.post('/docentes',addDocente);
//funcion para agregar varios estudiantes
router.post('/docentesLista',addDocentes);
//funcion para actualizar un docente por ID
router.put('/docentes/:id',updateDocenteById);
//funcion para eliminar un docente por ID
//riesgo si se elimina estudiante se deben implementar funciones
//en cascada para eliminar correctamente
router.delete('/docentes/:id',deleteDocenteById);
//funcion para recuperar a los docentes tutores
router.get('/tutores',getTutores);
//funcion para recuperar a los docentes tutores por Id
router.get('/tutores/:id',getTutorById);
//route login docente
router.post('/loginDocente',loginDocente);
//route login coordinador
router.post('/loginCoordinador',loginCoordinador)
//get coordinador 
router.get('/coordinador',getCoordinador)
export default router;