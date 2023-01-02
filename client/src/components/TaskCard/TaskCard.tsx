
import { deleteTaskRequest } from "@/api/tasks.api";
import { ITask } from "@/models/Task";
import moment from 'moment';


interface Props {
  task: ITask;
};

const TaskCard: React.FunctionComponent<Props> = ({task}) => {

  const handleDelete = async (id: number) => {
    const response =await deleteTaskRequest(id);
    console.log(response.data.message);
  }
  
  return (
    <div >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✔️" : "❌"}</span>
      <span>{moment(task.created_at).format("DD/MM/YYYY")}</span>
      <button onClick={()=>handleDelete(task.id as number )}>Delete </button>
      <button>Edit </button>
    </div>
  );
};

export default TaskCard;
