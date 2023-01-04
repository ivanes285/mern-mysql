import { ITask } from "@/models/Task";
import axios from "axios";

const getTasksRequest = async () => {
  const response = await axios.get("http://localhost:4000/api/v1/tasks");
  return response;
};
const getTaskRequest = async (id: number) => {
  const response = await axios.get(`http://localhost:4000/api/v1/tasks/${id}`);
  return response;
};

const createTaskRequest = async (task: ITask) => {
  const response = await axios.post("http://localhost:4000/api/v1/tasks", task);
  return response;
};

const deleteTaskRequest = async (id: number) => {
  const response = await axios.delete(`http://localhost:4000/api/v1/tasks/${id}`);
  return response;
};
const updateTaskRequest = async (id: number, task: ITask) => {
  const response = await axios.put(`http://localhost:4000/api/v1/tasks/${id}`, task);
  return response;
};

const updateTaskDone = async (id: number, done:boolean) => {
  const response = await axios.put(`http://localhost:4000/api/v1/tasks/${id}`,{done});
  return response;
};
export { createTaskRequest, getTasksRequest, deleteTaskRequest, updateTaskRequest,getTaskRequest , updateTaskDone };
