import { createTaskRequest } from "@/api/tasks.api";
import { Task } from "@/models/Task";
import { Formik, Form } from "formik";

const TaskForm = () => {
  const initialValues: Task = { title: "", description: "" };
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values,actions) => {
          try {
            const response = await createTaskRequest(values);
            console.log(response.data.message);
            actions.resetForm();//Reset form
          } catch (error: any) {
            console.error(error.response.data);
          }
        }}
      >
        {({ handleChange,handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input type="text" name="title" placeholder="Write a title" onChange={handleChange} value={values.title} />
            <label>description</label>
            <textarea name="description" rows={3} placeholder="Write a description" onChange={handleChange} value={values.description}></textarea>
            <button type="submit" disabled={isSubmitting}>{isSubmitting?"Saving":"Save"}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
