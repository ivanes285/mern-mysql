import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, TaskForm, TaskPage } from "./pages";
import { Navbar } from "./components";

export default function App() {
  return (
    <div className="bg-slate-900">
      <Router>
        <Navbar /> {/* Navegación */}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<TaskPage />} />
          <Route path="/newtask" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </Router>
    </div>
  );
}
