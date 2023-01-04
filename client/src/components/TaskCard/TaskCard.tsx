
import { deleteTaskRequest, updateTaskDone } from "@/api/tasks.api";
import { ITask } from "@/models/Task";
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


interface Props {
  task: ITask;
};

const TaskCard: React.FunctionComponent<Props> = ({task}) => {
  const navigate = useNavigate();
  const handleDelete = async (id: number) => {
    try {
      const response= await deleteTaskRequest(id);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  
  }

  const handleDone = async (id:number, taskDone:boolean) => {
 
   const response = await updateTaskDone(id,!taskDone);
   console.log("response" ,response.data.message);
  }
  
  return (
    <div >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done ? "✔️" : "❌"}</span>
      <span>{moment(task.created_at).format("DD/MM/YYYY")}</span>
      <button onClick={()=>handleDelete(task.id as number )}>Delete </button>
      <button onClick={()=> navigate(`/edit/${task.id}`)}>Edit</button>
      <button onClick={()=> handleDone(task.id as number,task.done as boolean )}>Done</button>

      <Toaster />
    </div>
  );
};

export default TaskCard;
