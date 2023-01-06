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
      <h1 className="text-4xl text-white font-bold text-center pb-5">Tasks</h1>
      <div className="grid grid-cols-3  gap-5 ">
      {tasks.length > 0 ? tasks.map((task: ITask) => <TaskCard key={task.id} task={task} />) : <h2>There are No tasks</h2>}
      </div>
    </div>
  );
};
export default TaskPage;
