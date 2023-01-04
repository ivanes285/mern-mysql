import { getTasksRequest } from "@/api/tasks.api";
import { TaskCard } from "@/components/TaskCard";
import { ITask } from "@/models/Task";
import { useEffect, useState } from "react";


export interface TaskPageInterface {}
const TaskPage: React.FC<TaskPageInterface> = () => {


  const [tasks, setTasks] = useState<ITask[]>([]);
  useEffect(() => {
    const response = async () => {
      const res = await getTasksRequest();
      setTasks(res.data);
    };
    response();
  }, [tasks]);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.length > 0 ? tasks.map((task: ITask) => <TaskCard key={task.id} task={task} />) : <h2>There are No tasks</h2>}
      {/* <TaskCardPrueba /> */}

    </div>
  );
};
export default TaskPage;
