import { deleteTaskRequest, updateTaskDone } from "@/api/tasks.api";
import { ITask } from "@/models/Task";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Props {
  task: ITask;
}

const TaskCard: React.FunctionComponent<Props> = ({ task }) => {
  const navigate = useNavigate();
  const handleDelete = async (id: number) => {
    try {
      const response = await deleteTaskRequest(id);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const handleDone = async (id: number, taskDone: boolean) => {
    const response = await updateTaskDone(id, !taskDone);
    console.log("response", response.data.message);
  };

  return (
    <div className="border-2 border-slate-600 rounded-md p-4 ">
      <header className="flex flex-row items-center justify-between">
        <h2 className="text-3xl font-bolt">{task.title}</h2>
        <span className="text-xl">{task.done ? "✔️" : "❌"}</span>
      </header>
      <p className="text-md">{task.description}</p>
      <span>{moment(task.created_at).format("DD/MM/YYYY")}</span>
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        <button className="bg-red-600 py-1 px-4 rounded-lg " onClick={() => handleDelete(task.id as number)}>Delete </button>
        <button className="bg-green-500 py-1 px-4 rounded-lg" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
        <button className="bg-violet-500 py-1 px-4 rounded-lg" onClick={() => handleDone(task.id as number, task.done as boolean)}>Done</button>
      </div>
      
      <Toaster />
    </div>
  );
};

export default TaskCard;
