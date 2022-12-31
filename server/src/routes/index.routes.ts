import {Router, Request,Response} from 'express';
const router = Router();
import {pool} from '../db/db';

router.get('/ping', async (req:Request, res:Response):Promise<void>=> {
 pool.query('SELECT 1+1 as result',(err, rows, fields)=>{
    console.log("rows",rows);
 res.json(rows);
})
});

router.get('/', async (req:Request, res:Response):Promise<void>=> {
res.json({"/": "Ruta raiz"})
});


export default router;
