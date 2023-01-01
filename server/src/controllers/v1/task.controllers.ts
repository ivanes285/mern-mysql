import { Request, Response } from 'express';
import { pool } from '../../db/db';
const promisePool = pool.promise();

const getTasks = async (req: Request, res: Response): Promise<any> => {
  //?: Pagination WITH LIMIT AND MYSQL COUNT
  // const itemsPerPage: number = 4;
  // const page: number = parseInt(req.query.page as string);
  // const start = (page - 1) * itemsPerPage;
  //  let total= await promisePool.query('SELECT COUNT(*) AS total FROM tasks');
  //  total=total[0][0]["total"];
  //  const [rows]= await promisePool.query('SELECT * FROM tasks ORDER BY id DESC LIMIT ?,? ',[start,itemsPerPage] );
  //  res.json( { page: page,
  //   per_page: itemsPerPage,
  //   total: total,
  //   total_pages: Math.ceil(Number(total) / itemsPerPage),
  //   data: rows})
  try {
    const [rows] = await promisePool.query('SELECT * FROM tasks ORDER BY id DESC');
    res.json(rows);
  } catch (err: any) {
   return res.status(400).send(err.message);
  }
};

const getTaskById = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const [rows] = await promisePool.query('SELECT id FROM tasks ORDER BY id DESC LIMIT 1');
    if (id > rows[0]['id'] || Number(id) < 1) {
      throw { code: 404, message: 'Task not found, id not exist' };
    }
    const [result] = await promisePool.query('SELECT * FROM tasks WHERE id=?', [
      id,
    ]);
    res.status(200).json(result[0]);
  } catch (err: any) {
   return res.status(err.code).send(err.message);
  }
};

const createTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { title, description } = req.body;
    const [rows] = await promisePool.query(
      'INSERT INTO tasks (title,description) VALUES (?,?)',[title, description]);
    //const task= result[0];  "noImplicitAny": false en tsconfig
    res.json({ task: { id: rows['insertId'], title, description } });
  } catch (err: any) {
  return  res.status(400).send(err.message);
  }
 
};



const updateTask = async (req: Request, res: Response): Promise<any> => {
  //TODO: la actualizacion de la tarea es partial y no total, por lo que se deberia implementar otro metodo (patch) para actualizar la tarea
 
 try {

  const { id } = req.params;
  let { title, description } = req.body;
  const [task] = await promisePool.query('SELECT * FROM tasks WHERE id=?', [id]);

  if (title === undefined || title === null) {
    title = task[0]['title'];
  }

  if (description === undefined || description === null) {
    description = task[0]['description'];
  }
  const [rows] = await promisePool.query('UPDATE tasks SET title=? , description=? WHERE id=?',[title, description, id]);
  if (rows['changedRows'] !== 1) {
    throw { code: 404, message: 'Task not found, id not exist' };
  }
  res.json({ task: 'Update Task' });
} catch (err: any) {
 return res.status(err.code).send(err.message);
}
};


const deleteTask = async (req: Request, res: Response): Promise<any> => {
  try {
  const { id } = req.params;
  const [rows] = await promisePool.query('DELETE FROM tasks WHERE id=?', [id]);
  if (rows['affectedRows'] === 0) {
    throw { code: 404, message: 'Task not found, id not exist' };
  }
  res.status(200).json({ task: 'Delete Task' });
} catch (err: any) {
  return res.status(err.code).send(err.message);
}
};





export { getTasks, getTaskById, createTask, updateTask, deleteTask };
