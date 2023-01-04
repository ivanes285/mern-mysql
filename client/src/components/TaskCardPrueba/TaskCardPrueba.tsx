
import { AppStore } from "@/app/store";
import { ITask } from "@/models/Task";
import moment from "moment";
import { useSelector } from "react-redux";

const TaskCardPrueba = () => {
  const tasks = useSelector((state: AppStore) => state.tasks);
  return (
    <div>
      <h2>CARD TAREA DE PRUEBA</h2>
      {tasks.map((task: ITask) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <span>{task.done === true ? "✔️" : "❌"}</span>
          <span>{moment(task.created_at).format("DD/MM/YYYY")}</span>

          <button>Edit </button>
        </div>
      ))}
    </div>
  );
};
export default TaskCardPrueba;
