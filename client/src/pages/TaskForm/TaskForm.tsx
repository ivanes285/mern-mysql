import { createTaskRequest, getTaskRequest, updateTaskRequest } from "@/api/tasks.api";
import { ITask } from "@/models/Task";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate,useParams } from "react-router-dom";

const TaskForm = () => {
  // const initialValues: ITask = { title: "", description: "" };
  const [task, setTask] = useState<ITask>({ title: "", description: "" }); 
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      const response = async () => {
      const res=  await getTaskRequest(parseInt(params.id as string));
      setTask({title: res.data.title, description :res.data.description});
      }
      response();
   
    }
  }, []);

  return (
    <div>
      <h2>{params.id ? "Update Task" : "Create Task"}</h2>
      <Formik
        initialValues={task}
        enableReinitialize={true} //Enable to update the form values in inputss
        onSubmit={async (values, actions) => {
          
          try {
            if (params.id) {
              const response = await updateTaskRequest(parseInt(params.id as string), values);
              toast.success(response.data.message);
              actions.resetForm(); //Reset form
            }else{
              const response = await createTaskRequest(values);
              toast.success(response.data.message);
              actions.resetForm(); //Reset form
            }
            setTimeout (()=> navigate("/"), 2000);
            // console.log(response.data.message)

          } catch (error: any) {
            toast.error(error.response.data);
            // console.error(error.response.data);
          }
        }}
      >
        {({ handleChange, handleSubmit,  values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            
            <label>title</label>
            <input type="text" name="title" placeholder="Write a title" onChange={handleChange} value={values.title} />
            <label>description</label>
            <textarea
              name="description"
              rows={3}
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving" : params.id ? "Update" : "Save"}
            </button>
            <Toaster />
          </Form>
        )}
      </Formik>
     
    </div>
  );
};

export default TaskForm;
