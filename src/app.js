import express from 'express'
import config from './config'
import estudiantesRoutes from './routes/Estudiantes.routes'
import docentesRoutes from './routes/Docentes.routes'
import sesionesRoutes from './routes/SesionTutoria.routes'
import asignacionesRoutes from './routes/Asignaciones.routes'
import others from './routes/Others.routes'
import fichasRoutes from './routes/FichasTutoria.routes'
const cors=require('cors');
//usamos el framework express para la creacion del servidor
const app=express();
//Cors para la comunicacion entre front y back
app.use(cors());
//settings
//definir el puerto dentro de app
app.set('port',config.port);

//middlewares
app.use(express.json());//para poder recibir json desde el cliente
app.use(express.urlencoded({extended:false}));//para poder recibir datos de form de html

//port
//usamos todas las rutas de la api para estudiantes,docente
app.use(estudiantesRoutes);
app.use(docentesRoutes);
app.use(asignacionesRoutes);
app.use(sesionesRoutes);
app.use(fichasRoutes)
app.use(others);

export default app;