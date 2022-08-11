import express from 'express';
import db from './infra/db.js';
import dicas from './controller/controller.js';

const servidor = express();
servidor.use(express.json());

dicas(servidor, db);

servidor.listen(4000, () => {
    console.log(`Express iniciado no http://localhost:4000`)
});